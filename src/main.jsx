import React from 'react'
import ReactDOM from 'react-dom/client'
import Theme from './wrappers/Theme'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
)
