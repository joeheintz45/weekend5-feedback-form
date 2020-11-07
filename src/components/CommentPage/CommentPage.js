import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentPage extends Component {
  state = {
    comment: '',
  };

  nextPageDispatch = (event) => {
    this.props.dispatch({ type: 'COMMENT_ACTION', payload: this.state });
    this.props.history.push('/review');
  };

  inputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Do you have any comments for us?</h2>
        <input
          onChange={this.inputChange('comment')}
          placeholder="Comments?"
          type="text"
        />
        <button onClick={this.nextPageDispatch}>Next</button>
      </div>
    );
  }
}

export default connect()(CommentPage);
