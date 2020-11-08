import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
        <Button variant="contained" color="primary" onClick={this.nextPage}>
          Start
        </Button>
      </div>
    );
  }
}

export default HomePage;
