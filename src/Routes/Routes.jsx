import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";

import Book from "../pages/Book/Book";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


const Routes = createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/singup",
                element:<SingUp></SingUp>
            }
            ,
            {
                path:"/book/:id",
                element:<PrivateRouter><Book></Book></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

            }
            ,{
                path:"/bookings",
                element:<PrivateRouter><Bookings></Bookings></PrivateRouter>
            }
        ]
        
    }
])

export default Routes;