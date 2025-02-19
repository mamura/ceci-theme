import "./assets/sass/main.scss";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signin from './pages/Users/Signin'
import CustomPage from './layouts/CustomPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>

        <Route path="/" element={<CustomPage />}>
          <Route 
            path="/pages/users/signin"
            element={<Signin />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
