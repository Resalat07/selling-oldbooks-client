import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header'

const Main = () => {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header></Header>
            <Outlet className='mb-auto'></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;