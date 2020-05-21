import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Route, Switch} from "react-router-dom"


import Store from "./store/store"

import {Provider} from "react-redux"

import * as firebase from 'firebase';
import WeatherMore from "./components/WeatherMore";

const config = {
    apiKey: "AIzaSyCRy74-_pUobYCkv2nIWPIxMIcBW3f5FrI",
    authDomain: "weather-app-1541399314920.firebase.com",
    databaseURL: "https://weather-app-1541399314920.firebaseio.com/",
}
firebase.initializeApp(config)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
          <HashRouter>
              <Switch>
                  <Route exact path="/" component={App}/>
                  <Route path="/city/:name" component={WeatherMore}/>
              </Switch>
          </HashRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
