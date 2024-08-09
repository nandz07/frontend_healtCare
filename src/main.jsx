import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import { AuthContextProvider } from './context/AuthContex.jsx'
import Layouts from './layouts/Layouts.jsx'
import AdminLayouts from './layouts/AdminLayouts.jsx'
import AdminLogin from './pages/Admin/AdminLogin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer theme='dark' className='mt-20' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} />
        <Routes>
          <Route path='*' element={<Layouts />} />
          <Route path='/admin/*' element={<AdminLayouts />} />
          <Route path='/admin' element={<AdminLogin />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
