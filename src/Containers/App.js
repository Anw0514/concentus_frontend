/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar'
import Discover from './Discover'
import PageForm from '../Forms/PageForm'
import Login from "../Forms/Login";
import SignUp from '../Forms/Signup'
import PageIndex from '../Indices/PageIndex'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import '../App.css';
import MessageIndex from '../Indices/MessageIndex';
import Settings from '../Forms/Settings';


class App extends Component {
  constructor() {
    super();
    this.state = {
      myPages: [],
      discoverPages: [],
      bookings: [],
      selectedPage: null,
      selectedUser: null,
      goMessage: false,
      user: {},
      conversations: [],
      loginFailed: false,
      loggedIn: false,
      formDone: false
    };
  }

  handleNewPage = (type, name, zip, bio, img, tidbits, members, yt_video, address) => {
    // adds a new page after it has been posted to the database by PageForm
    console.log(members, tidbits)

    fetch(`http://localhost:3000/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({bc: {
        name,
        zip,
        user_id: this.state.user.id,
        bio,
        img,
        address,
        members,
        yt_video,
        tidbits
      }})
    })
      .then(resp => resp.json())
      .then(page => {
        this.setState({
          myPages: [...this.state.myPages, page],
          formDone: true
        },  () => setTimeout(this.setState({ formDone: false }), 1000));
      });
  };

  handleRemovePage = page => {
    // deletes a page from the database and from 'mypages'
    const newPages = this.state.myPages.filter(
      checkpage => page.id !== checkpage.id
    );
    fetch(
      `http://localhost:3000/${page.model.toLowerCase() + "s"}/${page.id}`,
      {
        method: "DELETE"
      }
    )
      .then(resp => resp.json())
      .then(deletedPage => {
        console.log(deletedPage);
        this.setState({
          myPages: newPages
        });
      });
  };

  handleEdit = page => {
    // cllback for /mypages when soemone clicks the edit button on a page
    this.setState({
      selectedPage: page
    });
  };

  handleUpdatePage = (type, name, zip, bio, img, tidbits, members, yt_video, address) => {
    // callback for /pageform when it is submitted and it's updating an existing page
    const imgs = [img]
    const newPages = this.state.myPages.filter(checkpage => {
      return (
        this.state.selectedPage.id + this.state.selectedPage.model !==
        checkpage.id + checkpage.model
      );
    });
    fetch(`http://localhost:3000/${type}/${this.state.selectedPage.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({bc: {
        name,
        zip,
        user_id: this.state.user.id,
        bio,
        imgs,
        address,
        members,
        yt_video,
        tidbits
      }})
    })
      .then(resp => resp.json())
      .then(page => {
        this.setState(
          {
            myPages: [...newPages, page],
            selectedPage: null,
            formDone: true
          },
          () => setTimeout(this.setState({ formDone: false }), 1000)
        );
      });
  };

  handleSelectUser = (user) => {
    const message = !!user
    let newUser = user
    if (message) {
      let convoUser = this.state.conversations.find(u => u.id === user.id)
      if (!!convoUser) {
        newUser = convoUser
      }
    }

    this.setState({
      selectedUser: newUser,
      goMessage: message
    })
  }

  handleSubmitMessage = (message) => {
    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: message,
        sender_id: this.state.user.id,
        recipient_id: this.state.selectedUser.id
      })
    }).then(resp => resp.json())
    .then(message => {
      let found = false
      let convoObj = this.state.selectedUser

      let convos = this.state.conversations.map(c => {
        if (c.id === convoObj.id) {
          c.messages.unshift(message)
          found = true
        }
        return c
      })

      if (!found) {
        convoObj = Object.assign({}, convoObj, {messages: [message]})
        convos = [convoObj, ...convos]
      }

      this.setState({
        conversations: convos,
        selectedUser: convoObj
      })
    })
  }

  handleLogin = (email, password) => {
    // authenticaes a login attempt and sets the state accordingly
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(resp => resp.json())
      .then(jsonResp => {
        if (!jsonResp.authenticated) {
          this.setState({
            loginFailed: true
          });
        } else {
          const user = jsonResp.user;
          this.setState({
            user: user.user,
            myPages: user.my_pages,
            discoverPages: user.discover_pages,
            conversations: user.conversations,
            loggedIn: true,
            loginFailed: false
          });
        }
      });
  };

  handleRegister = ({
    email,
    domain,
    password,
    name,
    zip,
    distance,
    distanceType,
    avatar
  }) => {
    // creates a new user in the backend and logs them in
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email + domain,
        password: password,
        name: name,
        zip: zip,
        distance: distance,
        distance_type: distanceType,
        avatar: avatar
      })
    })
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          user: user.user,
          myPages: user.my_pages,
          discoverPages: user.discover_pages,
          conversations: user.conversations,
          loggedIn: true,
          loginFailed: false
        });
      });
  };

  handleLogout = () => {
    // callback for navbar to allow a logout
    this.setState({
      loggedIn: false,
      user: {},
      loginFailed: false,
      selectedUser: null,
      myPages: [],
      discoverPages: [],
      conversations: [],
      selectedPage: null
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar
            user={this.state.user}
            leave={this.handleLogout}
            removeEdit={this.handleEdit}
            goMessage={this.handleSelectUser}
          />
          <Switch>
            <Route
              exact
              path="/discover"
              render={() =>
                !this.state.loggedIn ? (
                  <Redirect to="/login" />
                ) : (
                  <Discover
                    redirect={this.state.goMessage}
                    pages={this.state.discoverPages}
                    selectUser={this.handleSelectUser}
                  />
                )
              }
            />
            <Route
              exact
              path="/create"
              render={() =>
                !this.state.loggedIn ? (
                  <Redirect to="/login" />
                ) : (
                  <PageForm
                    page={this.state.selectedPage}
                    addPage={this.handleNewPage}
                    updatePage={this.handleUpdatePage}
                    redirect={this.state.formDone}
                  />
                )
              }
            />
            <Route
              exact
              path="/login"
              render={() =>
                this.state.loggedIn ? (
                  <Redirect to="/myPages" />
                ) : (
                  <Login
                    redirect={this.state.loggedIn}
                    error={this.state.loginFailed}
                    handleLogin={this.handleLogin}
                  />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={() =>
                this.state.loggedIn ? (
                  <Redirect to="/create" />
                ) : (
                  <SignUp
                    redirect={this.state.loggedIn}
                    error={this.state.registerFailed}
                    handleRegister={this.handleRegister}
                  />
                )
              }
            />
            <Route
              exact
              path="/mypages"
              render={() =>
                !this.state.loggedIn ? (
                  <Redirect to="/login" />
                ) : (
                  <div className="wide pageDiv">
                    <PageIndex
                      pages={this.state.myPages}
                      removePage={this.handleRemovePage}
                      discover={false}
                      editPage={this.handleEdit}
                      shouldLeave={this.state.selectedPage}
                    />
                  </div>
                )
              }
            />
            <Route
              exact
              path="/settings"
              render={() =>
                !this.state.loggedIn ? (
                  <Redirect to="/login" />
                ) : (
                    <div className="wide pageDiv">
                      <Settings
                        user={this.state.user}
                      />
                    </div>
                  )
              }
            />
            <Route
              exact
              path="/messages"
              render={() =>
                !this.state.loggedIn ? (
                  <Redirect to="/login" />
                ) : (
                  <div className="pageDiv">
                    <MessageIndex
                      conversations={this.state.conversations}
                      user={this.state.user}
                      selectedUser={this.state.selectedUser}
                      selectUser={this.handleSelectUser}
                      sendMessage={this.handleSubmitMessage}
                    />
                  </div>
                )
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
