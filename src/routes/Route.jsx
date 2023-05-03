import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import LoginLayout from "../Layouts/LoginLayout";
import Register from "../pages/Register/Register";
import Chef from "../pages/Chef/Chef";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Navigate to='chef'></Navigate>
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
        path:'chef',
        element:<Main></Main>,
        children:[
            {
                path:'/chef',
                element:<Chef></Chef>
            }
        ]
    }
    
   
])

export default router;
