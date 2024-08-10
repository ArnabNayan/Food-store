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
import FoodItems from "../Pages/FoodItems";
import FoodCategory from "../Pages/FoodCategory";
import Cart from "../components/Dashboard/Cart/Cart";
import AllUsers from "../components/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Payment from "../components/Dashboard/Payment/Payment";
import PaymentHistory from "../components/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../components/Dashboard/AdminHome/AdminHome";
import UserHome from "../components/Dashboard/UserHome/UserHome";
import AddReview from "../components/Dashboard/AddReview/AddReview";
import OrderManagement from "../components/Dashboard/OrderManagement/OrderManagement";
import ContactUs from "../Pages/ContactUs";



export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('https://food-store-server-g3gt.onrender.com/foods')
        },
        {
            path:"/foods/:id",
            element:<FoodDetails></FoodDetails>,
            loader:({params})=>fetch(`https://food-store-server-g3gt.onrender.com/foods/${params.id}`)
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
            path:"/contact",
            element:<ContactUs></ContactUs>
        },
        {
            path:"/food-items",
            element:<FoodItems></FoodItems>,
            loader:()=>fetch('https://food-store-server-g3gt.onrender.com/foodsDatabase')
        },
       
        {
            path:"food-items/food-details/:id",
            element:<DashboardFoodDetails></DashboardFoodDetails>,
            loader:({params})=>fetch(`https://food-store-server-g3gt.onrender.com/foodsDatabase/${params.id}`)
        },

        {
            path:"/order-by-category",
            element:<FoodCategory></FoodCategory>,
            loader:()=>fetch('https://food-store-server-g3gt.onrender.com/foodsDatabase')
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
              element:<PrivateRoute><AdminRoute><AllFoods></AllFoods></AdminRoute> </PrivateRoute>,
              loader:()=>fetch('https://food-store-server-g3gt.onrender.com/foodsDatabase')
          },
          {
            path:"add-food",
            element:<PrivateRoute><AdminRoute><AddFood></AddFood></AdminRoute></PrivateRoute>
        },
       
        {
            path:"all-foods/edit/:id",
            element:<PrivateRoute><AdminRoute><EditFood></EditFood></AdminRoute></PrivateRoute>,
            loader:({params})=>fetch(`https://food-store-server-g3gt.onrender.com/foodsDatabase/${params.id}`)
        },
        {
            path:"cart",
            element:<PrivateRoute><Cart></Cart></PrivateRoute>
        },
        {
            path:"users",
            element:<PrivateRoute><AdminRoute><AllUsers></AllUsers></AdminRoute></PrivateRoute>
        },
        {
            path:"payment",
            element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
            path:"paymentHistory",
            element:<PaymentHistory></PaymentHistory>
        },
        {
            path:"adminhome",
            element:<PrivateRoute><AdminRoute><AdminHome></AdminHome></AdminRoute></PrivateRoute>
        },
        {
            path:"userHome",
            element:<UserHome></UserHome>
        },
        {
            path:"review",
            element:<AddReview></AddReview>
        },
        {
            path:"order",
            element:<PrivateRoute><AdminRoute><OrderManagement></OrderManagement></AdminRoute></PrivateRoute>
        }
        
        ],   
    }
  ]);