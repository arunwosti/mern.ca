import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvioder from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <StoreContextProvioder>
 <App />
 </StoreContextProvioder>
 </BrowserRouter>
)  
  
