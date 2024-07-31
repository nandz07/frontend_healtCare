import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import CheckoutSuccess from '../pages/CheckoutSuccess'
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import PatientsDetails from '../pages/Admin/PatientsDetails';
import DoctorsDetails from '../pages/Admin/DoctorsDetails';

function Routers() {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/doctors' element={<Doctors />} />
    <Route path='/doctors/:id' element={<DoctorDetails />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Signup />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/services' element={<Services />} />
    <Route path='/checkout-success' element={<CheckoutSuccess />} />
    <Route path='/users/profile/me' element={
      <ProtectedRoute allowedRoles={['patient']}>
        <MyAccount />
      </ProtectedRoute>} />
    <Route path='/doctors/profile/me' element={
      <ProtectedRoute allowedRoles={['doctor']}>
        <Dashboard />
      </ProtectedRoute>} />
      <Route path='/admin/' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
      <Route path='/admin/patients' element={<PatientsDetails />} />
      <Route path='/admin/doctors' element={<DoctorsDetails />} />
  </Routes>
}

export default Routers