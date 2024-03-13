import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React offers a "Strict Mode" in which it calls each component function twice during development.
  // By calling the component twice, it helps find components that break these rules. 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
