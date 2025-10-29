import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PrimeReactContext from './Config/Config.jsx'
import AnimationProvider from './context/AnimationContext.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <PrimeReactContext>
        <AnimationProvider>
          <App />
        </AnimationProvider>
      </PrimeReactContext>
    </BrowserRouter>
)
