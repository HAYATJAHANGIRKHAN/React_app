import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './components/Card/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>HAYAT JAHNGIR KHAN</h1>
    <Card player="O" />
  </React.StrictMode>
);
