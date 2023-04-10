import React from "react";
import ReactDOM  from "react-dom/client";
import "./src/index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Headline from "./src/Components/Headline";
import Error from "./src/Components/Error";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import RestarentMenu from "./src/Components/RestarentMenu";

const AppLeayout = ()=> {
    return(
        < >  
        <Headline/> 
        < Outlet />
        </>
    )
}

const routeapp = createBrowserRouter([
    {
        path:"/",
        element:<AppLeayout /> ,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/About",
                element:<About />
            },
            {
                path:"/RestaurantMenu/:Restid",
                element:<RestarentMenu />
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeapp} />);