import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.getForms();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <br />
      </div>
    );
  }
}

export default App;
