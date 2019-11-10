import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import {FireBaseConfig} from './private/firebaseconfig';
  firebase.initializeApp(FireBaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
