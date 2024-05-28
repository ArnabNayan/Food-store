import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import AboutUs from "../Pages/AboutUs";
import Dashboard from "../Pages/Dashboard";
import Registration from "../Pages/Registration";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./privateroute/PrivateRoute";
import AllFoods from "../Pages/AllFoods";
import AddFood from "../Pages/AddFood";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
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
            path:"/register",
            element:<Registration></Registration>
        },
        {
            path:"/about",
            element:<AboutUs></AboutUs>
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        },
      ]
    },
    {
        path: "dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"",
                element:<PrivateRoute><Dashboard></Dashboard> </PrivateRoute>
            },
          {
              path:"all-foods",
              element:<PrivateRoute><AllFoods></AllFoods> </PrivateRoute>
          },
          {
            path:"add-food",
            element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        
        ],   
    }
  ]);