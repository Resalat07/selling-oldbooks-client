import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import buyy from '../../logo/buyy.png'

const Header = () => {
    const {user ,logOut}= useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
    }
    const menuItems = 
    <>
    <li><Link className='font-semibold text-green-900' to="/">Home</Link></li>
    {user?.uid ? 
    <>
    <li><Link className='font-semibold text-green-900' to="/dashboard">Dashboard</Link></li>
    <li><button className='font-semibold text-green-900' onClick={handleLogOut}>Sign Out</button></li>
    
    

    </>:
    <>
    <li><Link className='font-semibold text-green-900' to="/login">Login</Link></li>
    <li><Link className='font-semibold text-green-900' to="/signUp">Sign Up</Link></li>

    </>}
    

    </>
    return (
        <div className=' mb-3'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="  text-xl flex  "><img src={ buyy} className='w-6 m-1' alt="" /> <p className='m-1'>Bibliophile's Corner</p></Link>
                </div>
                <div className=" hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                
                
                
            </div>


        </div>
    );
};

export default Header;