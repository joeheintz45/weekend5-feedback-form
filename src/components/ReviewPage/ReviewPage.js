import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// component for the feedback review page
class ReviewPage extends Component {
  // sets the default state to the states of the reducers on index.js
  state = {
    feedback: {
      feeling: this.props.store.feelingReducer.feeling,
      understanding: this.props.store.understandingReducer.understanding,
      support: this.props.store.supportReducer.support,
      comments: this.props.store.commentReducer.comment,
    },
  };

  // posts the feed data to the server to be stored in the database on click
  submitFeedback = (event) => {
    axios
      .post('/feedback', this.state.feedback)
      .then((response) => {
        console.log('success');
        // switches to the /reset view upon successful POST
        this.props.history.push('/reset');
      })
      .catch((err) => {
        console.log(err);
        // alerts the user of failed POST and halts POST to server
        alert('The submission of your feedback failed!');
      });
  };

  render() {
    return (
      <div>
        <h2>Review your feedback</h2>
        <p>Feeling: {this.props.store.feelingReducer.feeling}</p>
        <p>
          Understanding: {this.props.store.understandingReducer.understanding}
        </p>
        <p>Support: {this.props.store.supportReducer.support}</p>
        <p>Comments: {this.props.store.commentReducer.comment}</p>
        <button onClick={this.submitFeedback}>Submit</button>
      </div>
    );
  }
}

// sets the Redux store so that this component has access to that data
const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(ReviewPage);
