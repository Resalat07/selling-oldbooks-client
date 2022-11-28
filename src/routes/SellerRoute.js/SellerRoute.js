import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import GridLoader from "react-spinners/GridLoader";
import useSeller from '../../hook/useSeller';


const SellerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isSeller ,isSellerLoading]=useSeller(user?.email)
    const location = useLocation();

    if(loading || isSellerLoading ){
        return <div className=' h-[800px] flex justify-center items-center align-middle'>
            <GridLoader 
        color="#0a7b64"
        size={52}></GridLoader>
        </div>



    }

    if (user && isSeller){
        return children;
    }

    return <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default SellerRoute;