import React from 'react'
import { Outlet } from 'react-router'
import LoginPage from '../pages/LoginPage'


const useAuth = ()=>{
    const user = {loggedIn: false}
    return user && user.loggedIn
}
const Protected = () => {
    const isAuth = useAuth()
  return isAuth ? <Outlet />  : <LoginPage />
}

export default Protected