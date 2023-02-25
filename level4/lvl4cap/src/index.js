import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import './dd.css';
import './card.css';
import './type.css';
import './toggle.css';
import'./pokedex.css';
import App from './App';
import { PokeProvider } from './components/Context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokeProvider>
      <App />
    </PokeProvider>
  </React.StrictMode>
);
