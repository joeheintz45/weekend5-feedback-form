import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
  if (action.type === 'FEELING_ACTION') {
    console.log(action.payload);
    return action.payload;
  } else {
    return state;
  }
};

const feedbackReducer = (state = {}, action) => {
  if (action.type === 'UNDERSTANDING_ACTION') {
    console.log(action.payload);
    return action.payload;
  } else {
    return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
