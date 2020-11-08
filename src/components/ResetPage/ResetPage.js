import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
        <Button variant="contained" color="primary" onClick={this.resetPage}>
          Leave New Feedback
        </Button>
      </div>
    );
  }
}

export default ResetPage;
