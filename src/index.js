import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Store from "./store/store"

import {Provider, useSelector} from "react-redux"

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCRy74-_pUobYCkv2nIWPIxMIcBW3f5FrI",
    authDomain: "weather-app-1541399314920.firebase.com",
    databaseURL: "https://weather-app-1541399314920.firebaseio.com/",
}
firebase.initializeApp(config)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
