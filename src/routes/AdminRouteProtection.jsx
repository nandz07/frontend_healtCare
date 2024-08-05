import React, { useContext } from 'react';
import { authContext } from '../context/AuthContex';
import { Navigate } from 'react-router-dom';

function AdminRouteProtection({ children }) {
  const { adminToken } = useContext(authContext);
  let parsedAdminToken 
  if(adminToken==null || adminToken=='null'){
    parsedAdminToken = JSON.parse(adminToken)
  }else{
    parsedAdminToken = adminToken
  }
  return parsedAdminToken!=null ? children : <Navigate to='/admin' replace />;
}

export default AdminRouteProtection;
