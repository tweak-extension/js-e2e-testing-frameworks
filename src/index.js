import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { worker } from './mocks/browser'

if (process.env.REACT_APP_MSW === 'on') {
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
