import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const myName = 'Rajan';
// const reactElement = React.createElement('h1', null, 'Hello, React!',myName, 'Welcome to React!',myName);

createRoot(document.getElementById('root')).render(
  //reactElement
  <StrictMode>
    <App />
  </StrictMode>,
)
