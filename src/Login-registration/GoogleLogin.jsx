import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";


const GoogleLogin = () => {
    const {googleLogIn}=useAuth()
    const handleGoogleSignIn=()=>{
        googleLogIn()
    }
    return (
        <button onClick={handleGoogleSignIn} className="btn w-full">
            <div>
           <FcGoogle size={24}/> 
        
        </div>
        </button>
    );
};

export default GoogleLogin;