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
      bookings: [],
      selectedPage: {},
      user: {}
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/users/2/info")
    .then(resp=> resp.json())
    .then(userInfo => console.log(userInfo))
  }

  render() {
    return (
      <div className="App">
        <NavBar /><br />
        <Discover /><br />
        <PageForm page={this.state.selectedPage} /><br />
        <PageIndex pages={this.state.myPages} />
      </div>
    );
  }
}

export default App;
