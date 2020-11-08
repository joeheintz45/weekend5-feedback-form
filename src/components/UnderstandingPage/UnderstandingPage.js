import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// component for the understanding page
class UnderstandingPage extends Component {
  state = {
    understanding: '',
  };

  // targets the input field and sets state to that input value
  inputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  // dispatches the state to the related reducer and switches to the /support view on click
  nextPageDispatch = (event) => {
    // checks if the input field is empty and if empty alerts the user to fill the field
    if (this.state.understanding === '') {
      alert('Please fill out the input field!');
    } else {
      this.props.dispatch({
        type: 'UNDERSTANDING_ACTION',
        payload: this.state,
      });
      this.props.history.push('/support');
    }
  };

  render() {
    return (
      <div>
        <h2>How well do you understand this week?</h2>
        <input
          onChange={this.inputChange('understanding')}
          placeholder="Understanding?"
          type="number"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.nextPageDispatch}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);
