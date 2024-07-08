import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleLogIn}=useAuth()
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
     const location=useLocation()
     const from=location?.state?.from?.pathname || '/'
    const handleGoogleSignIn=()=>{
        googleLogIn()
        .then(result=>{
            console.log(result.user)
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName,
                photoURL:result.user?.photoURL
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate(from)
            })
        })
        

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