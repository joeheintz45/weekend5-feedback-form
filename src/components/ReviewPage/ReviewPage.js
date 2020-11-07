import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {
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
        <button>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(ReviewPage);
