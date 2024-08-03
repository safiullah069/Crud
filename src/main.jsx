import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './Edit.jsx'
import Read from './Read.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/edit/:Id' element={<Edit />} />
      <Route path='/read' element={<Read />} />
    </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
