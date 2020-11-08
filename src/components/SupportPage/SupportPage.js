import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
  state = {
    support: '',
  };

  nextPageDispatch = (event) => {
    if (this.state.support === '') {
      alert('Please fill out the input field!');
    } else {
      this.props.dispatch({ type: 'SUPPORT_ACTION', payload: this.state });
      this.props.history.push('/comment');
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
        <h2>How supported are you feeling?</h2>
        <input
          onChange={this.inputChange('support')}
          placeholder="Support?"
          type="number"
        />
        <button onClick={this.nextPageDispatch}>Next</button>
      </div>
    );
  }
}

export default connect()(SupportPage);
