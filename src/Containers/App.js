import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar'
import Discover from './Discover'
import PageForm from '../Forms/PageForm'
import Login from "../Forms/Login";
import PageIndex from '../Indices/PageIndex'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import '../App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      myPages: [],
      discoverPages: [],
      bookings: [],
      selectedPage: {},
      user: {}
    }
  }

  componentDidMount() {
    // !!! change user_id to be dynamic
    // fetches all info related to a user
    fetch("http://localhost:3000/users/2/info")
    .then(resp=> resp.json())
    .then(userInfo => {
      this.setState({
        myPages: userInfo.my_pages,
        discoverPages: userInfo.discover_pages
      })
    })
  }

  handleNewPage = (type, name, zip, bio, img) => {
    // adds a new page after it has been posted to the database by PageForm

    fetch(`http://localhost:3000/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        zip: zip,
        user_id: 2,
        bio: bio,
        img: img
      }),
    }).then(resp => resp.json())
      .then(page => {
        this.setState({
          myPages: [...this.state.myPages, page]
      })})
  }

  handleRemovePage = (page) => {
    // deletes a page from the database and from 'mypages'
    const newPages = this.state.myPages.filter(checkpage => page.id !== checkpage.id)
    fetch(`http://localhost:3000/${page.model.toLowerCase() + 's'}/${page.id}`, {
      method: 'DELETE'
    }).then(resp => resp.json()).then(deletedPage => {
      console.log(deletedPage)
      this.setState({
      myPages: newPages
      })
    })
  }

  handleEdit = (page) => {
    this.setState({
      selectedPage: page
    })
  }

  handleUpdatePage = (page) => {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/discover"
              render={() => <Discover pages={this.state.discoverPages} />}
            />
            <Route
              exact
              path="/create"
              render={() => (
                <PageForm
                  page={this.state.selectedPage}
                  addPage={this.handleNewPage}
                  updatePage={this.handleUpdatePage}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => <Login/>}
            />
            <Route
              exact
              path="/mypages"
              render={() => (
                <div className="pageDiv">
                  <PageIndex
                    pages={this.state.myPages}
                    removePage={this.handleRemovePage}
                    discover={false}
                    editPage={this.handleEdit}
                  />
                </div>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
