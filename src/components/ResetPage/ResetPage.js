import React, { Component } from 'react';

// component for the reset view
class ResetPage extends Component {
  // switches to the / view on click
  resetPage = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Thank You for your Feedback!</h2>
        <button onClick={this.resetPage}>Leave New Feedback</button>
      </div>
    );
  }
}

export default ResetPage;
