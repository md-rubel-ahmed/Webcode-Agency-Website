import React from 'react'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const {user} = useAuth()
 return user ? children : <Navigate t0 ="/login/>
}

export default PrivateRoute
