import { Navigate, useLocation } from "react-router-dom";


import useAdmin from "../hooks/useAdmin";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";


// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading]=useAdmin()
    const {user,loading}=useAuth()
    const location=useLocation()
    if(loading || isAdminLoading){
        return <Spinner></Spinner>
    }
    if(user && isAdmin){
        return children;
    } 
    return <Navigate to={"/login"} state={{from:location}}replace></Navigate>
    
};

export default AdminRoute;