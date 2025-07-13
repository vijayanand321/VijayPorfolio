// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// //import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom"
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// Delay app rendering until config.json is loaded
fetch("/config.json")
  .then(res => res.json())
  .then(config => {
    // Set global config object
    window._env_ = config;

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  })
  .catch(error => {
    console.error("Failed to load config.json", error);

    // Fallback if config.json fails (optional)
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

