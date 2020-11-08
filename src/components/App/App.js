import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FeelingPage from '../FeelingPage/FeelingPage';
import HomePage from '../HomePage/HomePage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportPage from '../SupportPage/SupportPage';
import CommentPage from '../CommentPage/CommentPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import ResetPage from '../ResetPage/ResetPage';

class App extends Component {
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
        {/* Router setting Routes to each view on the webpage  */}
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/feeling" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comment" component={CommentPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/reset" component={ResetPage} />
        </Router>
      </div>
    );
  }
}

export default App;
