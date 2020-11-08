import React, { Component } from 'react';
import { connect } from 'react-redux';

// component for the support page
class SupportPage extends Component {
  state = {
    support: '',
  };

  // dispatches state to the related reducer and switches to the /comment view on click
  nextPageDispatch = (event) => {
    // checks for empty input field and alerts user if left empty\
    if (this.state.support === '') {
      alert('Please fill out the input field!');
    } else {
      this.props.dispatch({ type: 'SUPPORT_ACTION', payload: this.state });
      this.props.history.push('/comment');
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
