import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingPage extends Component {
  state = {
    feeling: '',
  };

  nextPageDispatch = (event) => {
    if (this.state.feeling === '') {
      alert('Please fill out the input field!');
    } else {
      this.props.dispatch({ type: 'FEELING_ACTION', payload: this.state });
      this.props.history.push('/understanding');
    }
  };

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
        <button onClick={this.nextPageDispatch}>Next</button>
      </div>
    );
  }
}

export default connect()(FeelingPage);
