import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRouteProtection from './AdminRouteProtection'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import PatientsDetails from '../pages/Admin/PatientsDetails'
import DoctorsDetails from '../pages/Admin/DoctorsDetails'

function AdminRouters() {
    return <Routes>
        <Route path='/dashboard' element={
            <AdminRouteProtection>
                <AdminDashboard />
            </AdminRouteProtection>
        } />
        <Route path='/patients' element={
            <AdminRouteProtection>
                <PatientsDetails />
            </AdminRouteProtection>
        } />
        <Route path='/doctors' element={
            <AdminRouteProtection>
                <DoctorsDetails />
            </AdminRouteProtection>
        } />
    </Routes>

}

export default AdminRouters