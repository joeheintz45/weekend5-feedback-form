import React, { Component } from 'react';

class HomePage extends Component {
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
