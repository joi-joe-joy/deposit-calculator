import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from "redux-thunk";
import App from './components/app/app';
import {reducer} from "./reducer/reducer";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

