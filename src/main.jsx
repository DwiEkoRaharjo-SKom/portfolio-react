
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Impor BrowserRouter
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename={import.meta.env.BASE_URL}> {/* Tambahkan basename */}
    <App />
  </BrowserRouter>
);