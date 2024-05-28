import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner";
import useAuth from "../../hooks/useAuth";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children;
    } 
    return <Navigate to={"/login"} state={{from:location}}replace></Navigate>
    
};

export default PrivateRoute;