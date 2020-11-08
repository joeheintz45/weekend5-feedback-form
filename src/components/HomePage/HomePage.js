import React, { Component } from 'react';

// component for the home page view
class HomePage extends Component {
  // switches to the /feeling view on click
  nextPage = (event) => {
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div>
        <h2>Let's Get started</h2>
        <button onClick={this.nextPage}>Start</button>
      </div>
    );
  }
}

export default HomePage;
