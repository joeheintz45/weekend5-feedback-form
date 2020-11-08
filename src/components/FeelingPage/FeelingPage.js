import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// component for the feeling view
class FeelingPage extends Component {
  state = {
    feeling: '',
  };

  // dispatches the state to the related reducer and switches to the /understanding view on click
  nextPageDispatch = (event) => {
    // checks if the input field is empty and alerts user if not filled
    if (this.state.feeling === '') {
      alert('Please fill out the input field!');
    } else {
      this.props.dispatch({ type: 'FEELING_ACTION', payload: this.state });
      this.props.history.push('/understanding');
    }
  };

  // targets the input field and sets state to that value
  inputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>How are you feeling?</h2>
        <input
          onChange={this.inputChange('feeling')}
          placeholder="Feeling?"
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

export default connect()(FeelingPage);
