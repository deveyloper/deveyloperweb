import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/site.scss';
import {FireBaseConfig  } from './private/firebaseconfig';
import Main from './Container/Main';
import BlackWhite from './Container/BlackWhite'
  firebase.initializeApp(FireBaseConfig);

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.unregister();
