import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";
import {Persistor, store} from './Redux/store.js';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';


ReactDOM.render(  
  <Provider store={store}>
    <PersistGate loading ={null} persistor={Persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);




// const {token} = JSON.parse(localStorage.getItem("userData"));
// console.log(token);
// if (token) {
//   axios.defaults.headers.common['Authorization'] = token  
// }
