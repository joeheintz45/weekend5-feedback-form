import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
  state = {
    understanding: '',
  };

  inputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  nextPageDispatch = (event) => {
    this.props.dispatch({ type: 'UNDERSTANDING_ACTION', payload: this.state });
    this.props.history.push('/support');
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
        <button onClick={this.nextPageDispatch}>Next</button>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);
