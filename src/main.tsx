import App from './App.tsx' // 👈 important
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
)

