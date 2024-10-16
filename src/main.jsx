import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import "./global.css"
import "./App.css"

import FoodApp from './FoodApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <FoodApp></FoodApp>
  </StrictMode>,
)
