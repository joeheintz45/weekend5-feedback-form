import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// component that displays the comments input page
class CommentPage extends Component {
  state = {
    comment: '',
  };

  // dispatches the state to the reducer on button click and changes to /review view
  nextPageDispatch = (event) => {
    this.props.dispatch({ type: 'COMMENT_ACTION', payload: this.state });
    this.props.history.push('/review');
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
        <h2>Do you have any comments for us?</h2>
        <input
          onChange={this.inputChange('comment')}
          placeholder="Comments?"
          type="text"
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

export default connect()(CommentPage);
