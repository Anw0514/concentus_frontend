import React, { Component } from 'react';
import NavBar from '../Navigation/NavBar'
import Discover from './Discover'
import PageForm from '../Forms/PageForm'
import PageIndex from '../Indexes/PageIndex'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar /><br />
        <Discover /><br />
        <PageForm /><br />
        <PageIndex />
      </div>
    );
  }
}

export default App;
