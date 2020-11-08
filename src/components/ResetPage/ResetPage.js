import React, { Component } from 'react';

class ResetPage extends Component {
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
