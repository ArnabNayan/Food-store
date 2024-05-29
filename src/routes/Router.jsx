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
import FoodDetails from "../Pages/FoodDetails";
import DashboardFoodDetails from "../Pages/DashboardFoodDetails";
import EditFood from "../Pages/EditFood";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:3000/foods')
        },
        {
            path:"/foods/:id",
            element:<FoodDetails></FoodDetails>,
            loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`)
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
        }
       
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
              element:<PrivateRoute><AllFoods></AllFoods> </PrivateRoute>,
              loader:()=>fetch('http://localhost:3000/foods')
          },
          {
            path:"add-food",
            element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path:"all-foods/food-details/:id",
            element:<PrivateRoute><DashboardFoodDetails></DashboardFoodDetails></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {
            path:"all-foods/edit/:id",
            element:<PrivateRoute><EditFood></EditFood></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`)
        },
        
        ],   
    }
  ]);