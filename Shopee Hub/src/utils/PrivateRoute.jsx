import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "../services/Context";
import { Login } from './Path_Url';

function PrivateRoute({ children }) {
  
    const { token } = useAuth();
    console.log(token, "private route tokan")
    if (!token)
    {
        return <Navigate to="/login" />
    }
     if ( token != undefined || token != null ) {
        // not logged in so redirect to login page with the return url
        // return <Navigate to="/login" />
        return children;

    }
    else
    {
         return <Navigate to={Login} />
    }


}

export default PrivateRoute