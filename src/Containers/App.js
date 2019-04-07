import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar'
import Discover from './Discover'
import PageForm from '../Forms/PageForm'
import PageIndex from '../Indexes/PageIndex'
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
    fetch("http://localhost:3000/users/1/info")
    .then(resp=> resp.json())
    .then(userInfo => {
      this.setState({
        myPages: userInfo.my_pages,
        discoverPages: userInfo.discover_pages
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact path="/discover"
              render={() => <Discover pages={this.state.discoverPages} />}
            />
            <Route
              exact path="/create"
              render={() => <PageForm page={this.state.selectedPage} />}
            />
            <Route
              exact path="/mypages"
              render={() => <div className='pageDiv'><PageIndex pages={this.state.myPages} /></div>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
