import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import GridLoader from "react-spinners/GridLoader";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className=' h-[800px] flex justify-center items-center align-middle'>
            <GridLoader 
        color="#0a7b64"
        size={52}></GridLoader>
        </div>



    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;