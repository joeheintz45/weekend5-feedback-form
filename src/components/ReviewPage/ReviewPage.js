import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {
  state = {
    feedback: {
      feeling: this.props.store.feelingReducer.feeling,
      understanding: this.props.store.understandingReducer.understanding,
      support: this.props.store.supportReducer.support,
      comments: this.props.store.commentReducer.comment,
    },
  };

  submitFeedback = (event) => {
    axios
      .post('/feedback', this.state.feedback)
      .then((response) => {
        console.log('success');
        this.props.history.push('/reset');
      })
      .catch((err) => {
        console.log(err);
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

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(ReviewPage);
