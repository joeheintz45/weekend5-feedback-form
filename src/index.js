import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducers that takes care of data from the feelings page
const feelingReducer = (state = {}, action) => {
  if (action.type === 'FEELING_ACTION') {
    console.log(action.payload);
    return action.payload;
  } else {
    return state;
  }
};

// reducer that takes care of the data from the understanding page
const understandingReducer = (state = {}, action) => {
  if (action.type === 'UNDERSTANDING_ACTION') {
    console.log(action.payload);
    return action.payload;
  } else {
    return state;
  }
};

// reducer that takes care of the data from the support page
const supportReducer = (state = {}, action) => {
  if (action.type === 'SUPPORT_ACTION') {
    console.log(action.payload);
    return action.payload;
  } else {
    return state;
  }
};

// reducer that takes care of the data from the comment page
const commentReducer = (state = {}, action) => {
  if (action.type === 'COMMENT_ACTION') {
    console.log(action.payload);
    return action.payload;
  } else {
    return state;
  }
};

// creates a data store that combines all the data from the reducers
const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
  })
);

ReactDOM.render(
  // Provider wraps the React with Redux to communicate with the reducers
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
