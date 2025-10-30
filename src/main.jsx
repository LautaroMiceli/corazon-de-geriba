import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PrimeReactContext from './Config/Config.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <PrimeReactContext>
          <App />
      </PrimeReactContext>
    </BrowserRouter>
)
