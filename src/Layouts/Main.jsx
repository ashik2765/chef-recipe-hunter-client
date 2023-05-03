import React from 'react';
import NavBar from '../pages/Header/NavBar';
import Banner from '../pages/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';



const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Banner></Banner>
           <Outlet></Outlet>
           <Footer></Footer>
           
        </div>
    );
};

export default Main;