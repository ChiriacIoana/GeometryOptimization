import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GeometryOptimization.github.io/',

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)