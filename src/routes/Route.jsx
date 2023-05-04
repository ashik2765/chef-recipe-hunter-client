import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../pages/Register/Register";
import Chef from "../pages/Chef/Chef";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import PrivateRoute from "./PrivateRoute";
import RecipeDetailsLayout from "../Layouts/RecipeDetailsLayout";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Navigate to='/chef'></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>,
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/chef',
                element:<Chef></Chef>
            },
            
        ]
    },
    {
        path:'recipe',
        element:<RecipeDetailsLayout></RecipeDetailsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/chefs/${params.id}`)
            },
            
        ]
        
    },
    {
            path:'blog',
            element:<Blogs></Blogs>
    }
    
    
   
])

export default router;
