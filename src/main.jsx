import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BrowserRouter, 
          Routes, 
          Route 
        
        } from "react-router-dom";
import User from './components/User/User.jsx';
import Admin from './components/Admin/Admin.jsx';
import HomePage from './components/Home/HomePage.jsx';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} >
          <Route index element={<HomePage/>} ></Route>

          <Route path='/user' element={<User/>} ></Route>
      </Route>
          <Route path='/admin' element={<Admin/>} ></Route>
     
    </Routes>
   
  </BrowserRouter>
  /* </StrictMode>, */
)
