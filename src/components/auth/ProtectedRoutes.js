import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
const user = JSON.parse(sessionStorage.getItem("loginStatus"))
  
  return (
    user != null ? <Outlet /> : <Navigate to='/' />
  )
}

export default ProtectedRoutes