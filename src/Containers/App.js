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

class App extends Component {
  constructor() {
    super();
    this.state = {
      myPages: [],
      discoverPages: [],
      bookings: [],
      selectedPage: {},
      user: {},
      loginFailed: false,
      loggedIn: false
    };
  }

  handleNewPage = (type, name, zip, bio, img) => {
    // adds a new page after it has been posted to the database by PageForm

    fetch(`http://localhost:3000/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        zip: zip,
        user_id: 2,
        bio: bio,
        img: img
      })
    })
      .then(resp => resp.json())
      .then(page => {
        this.setState({
          myPages: [...this.state.myPages, page]
        });
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
    this.setState({
      selectedPage: page
    });
  };

  handleUpdatePage = (type, name, zip, bio, img) => {
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
      body: JSON.stringify({
        name: name,
        zip: zip,
        user_id: this.state.user.id,
        bio: bio,
        img: img
      })
    })
      .then(resp => resp.json())
      .then(page => {
        this.setState({
          myPages: [...newPages, page],
          selectedPage: {}
        });
      });
  };

  handleLogin = (email, password) => {
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
          const user = jsonResp.user
          this.setState({
            user,
            myPages: user.my_pages,
            discoverPages: user.discover_pages,
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
    distanceType
  }) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email + domain,
        password: password,
        name: name,
        zip: zip,
        distance: distance,
        distance_type: distanceType
      })
    })
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          user,
          myPages: user.my_pages,
          discoverPages: user.discover_pages,
          loggedIn: true,
          loginFailed: false
        });
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/discover"
              render={() =>
                !this.state.loggedIn ? (
                  <Redirect to="/login" />
                ) : (
                  <Discover pages={this.state.discoverPages} />
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
                  <Redirect to="/discover" />
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
                  <div className="pageDiv">
                    <PageIndex
                      pages={this.state.myPages}
                      removePage={this.handleRemovePage}
                      discover={false}
                      editPage={this.handleEdit}
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
