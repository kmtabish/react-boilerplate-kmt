//console.log("Hello Clarifai")
import test from './test';
import img from './assets/1.png';
import styles from './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import App from './components/App';
console.log(img);
console.log(test);

ReactDOM.render(
  <div>
    Hello world!
    <App />
  </div>,
  document.getElementById('app')
);