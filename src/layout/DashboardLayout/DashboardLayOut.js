import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hook/useAdmin';
import useSeller from '../../hook/useSeller';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const DashboardLayOut = () => {
    const {user}=useContext(AuthContext)
    const [isAdmin] =useAdmin(user?.email)
    const [ isSeller]= useSeller(user?.email)
    return (
        <div className=' h-[800px]'>
            <Header></Header>
            <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
            <p className=' text-green-900 m-2'>menu</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> 
            </label>



            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content bg-white">
                        
                        
                        <li><Link to='/dashboard/myOrder'>My Order</Link></li>
                        {isSeller&&<li><Link to='/dashboard/seller'>My Product</Link></li>}
                        {
                            isAdmin && <>
                            <li><Link to='/dashboard/users'>All User</Link></li>
                            <li><Link to='/dashboard/allItems'>All Items</Link></li>
                            <li><Link to='/dashboard/unapproved'>Unapproved</Link></li>
                            <li><Link to='/dashboard/opinions'>User Opinion</Link></li>
                            </>
                        }
                        
                    </ul>

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default DashboardLayOut;