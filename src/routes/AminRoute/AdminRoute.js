import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import GridLoader from "react-spinners/GridLoader";
import useAdmin from '../../hook/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin ,isAdminLoading]=useAdmin(user?.email)
    const location = useLocation();

    if(loading || isAdminLoading ){
        return <div className=' h-[800px] flex justify-center items-center align-middle'>
            <GridLoader 
        color="#0a7b64"
        size={52}></GridLoader>
        </div>



    }

    if (user && isAdmin){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default AdminRoute;