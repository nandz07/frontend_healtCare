import React, { useContext } from 'react'
import { authContext } from '../context/AuthContex'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children, allowedRoles }) {

    const { token, role } = useContext(authContext)

    const isAllowed = allowedRoles.includes(role)
    console.log(role)
    console.log(token)
    const accessibleRoute =token && isAllowed ? children : <Navigate to='/login' replace={true} />
  return accessibleRoute;
}

export default ProtectedRoute