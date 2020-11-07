import React, { Component } from 'react';

class FeelingPage extends Component {
  render() {
    return (
      <div>
        <h2>How are you feeling?</h2>
        <input placeholder="Feeling?" type="text" />
        <button>Next</button>
      </div>
    );
  }
}

export default FeelingPage;
