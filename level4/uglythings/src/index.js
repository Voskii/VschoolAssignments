import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { BeautyProvider } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BeautyProvider>
      <App />
    </BeautyProvider>
  </React.StrictMode>
);