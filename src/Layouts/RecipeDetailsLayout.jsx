import React from 'react';
import NavBar from '../pages/Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';


const RecipeDetailsLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeDetailsLayout;