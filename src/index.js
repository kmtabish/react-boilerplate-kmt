//console.log("Hello Clarifai")
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import  store  from './store'
import RouteComp from './routes/router'
import { HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
   <MuiThemeProvider>
     <Router>
      <RouteComp />
    </Router>
  </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);