import React from 'react';
import NavBar from '../pages/Header/NavBar';
import Banner from '../pages/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import SectionOne from '../pages/ExtraSection/SectionOne';
import RecipeDetails from '../pages/RecipeDetails/RecipeDetails';
import ExtraSectionTwo from '../pages/ExtraSectionTwo/ExtraSectionTwo';



const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Banner></Banner>
           <Outlet></Outlet>
           <SectionOne></SectionOne>
           <ExtraSectionTwo></ExtraSectionTwo>
           <Footer></Footer>
           
        </div>
    );
};

export default Main;