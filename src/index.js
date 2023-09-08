import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/global.css";
import Router from "./components/Router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
