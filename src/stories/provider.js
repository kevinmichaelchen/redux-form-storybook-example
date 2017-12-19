import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { createStore } from 'redux';
// import { applyMiddleware } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
// import createBrowserHistory from 'history/createBrowserHistory';

const initialState = {};

const store = createStore(
  combineReducers({
    form
  }),
  initialState,
  // applyMiddleware(
  //   routerMiddleware(createBrowserHistory())
  // )
);

const Provider = ({ story }) => (
  <ReduxProvider store={store}>
    {story}
  </ReduxProvider>
);

export {
  Provider
}
