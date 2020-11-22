import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './Header'

import './assets/index.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
      <Header />,
    document.getElementById('header')
);




