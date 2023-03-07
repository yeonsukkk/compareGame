import React from 'react';
import ReactDOM from 'react-dom/client';
//component
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#wrap'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
