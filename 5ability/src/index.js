import React from 'react';
import './index.css';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
