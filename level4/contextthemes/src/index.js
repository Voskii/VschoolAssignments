import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { ThemeContextProvider } from './components/themeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);

