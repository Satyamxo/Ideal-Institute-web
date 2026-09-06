import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "./index.css"

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create root

root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
