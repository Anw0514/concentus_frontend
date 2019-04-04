import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar'
import Discover from './Discover'
import PageForm from '../Forms/PageForm'
import PageIndex from '../Indexes/PageIndex'
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
      <div className="App">
        <NavBar /><br />
        <Discover pages={this.state.discoverPages}/><br />
        <PageForm page={this.state.selectedPage} /><br />
        <PageIndex pages={this.state.myPages} />
      </div>
    );
  }
}

export default App;
