//console.log("Hello Clarifai")
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers/index';
import middleware from './middleware';
import { createLogger } from 'redux-logger';

let environment = (process.env.NODE_ENV || 'development').toString().trim().toLowerCase();
if (environment != 'production') {
    middleware.push(createLogger());
}

let store = createStore(reducers, applyMiddleware(...middleware));


ReactDOM.render(
  <Provider store={store}>
   <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);