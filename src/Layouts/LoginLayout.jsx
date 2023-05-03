import React from 'react';
import NavBar from '../pages/Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';


const LoginLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default LoginLayout;