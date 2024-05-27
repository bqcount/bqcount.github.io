import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sky from './components/Sky/Sky.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sky/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
