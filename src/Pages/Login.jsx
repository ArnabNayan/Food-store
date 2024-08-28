import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Login-registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {signIn,user}=useAuth()
  const location=useLocation()
  const navigate=useNavigate()
  const [showPassword,setShowPassword]=useState(false)
  const from=location?.state?.from?.pathname||'/';
  const togglePasswordVisibility=()=>{
    setShowPassword((prevState)=>!prevState)
  }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(email, password);
    //   await signIn(email,password)
    //   Swal.fire({
    //     title: 'Success!',
    //     text: 'Login has become successfull',
    //     icon: 'success',
    //     confirmButtonText: 'OK'
    // });
    try {
      await signIn(email, password);
      Swal.fire({
        title: 'Success!',
        text: 'Login has become successful',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      navigate(from, { replace: true });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message, // Display the error message returned by Firebase or custom message
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  };
    
    
    useEffect(()=>{
      if(user){
        navigate(from,{replace:true})
      }
    },[user,from,navigate])
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-amber-500">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"name="email" required />
              </div>
              <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered pr-10"
                name="password"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-16 transform -translate-y-1/2 cursor-pointer text-xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
              <div className="form-control mt-6">
                <button className="btn bg-amber-500 text-xl">Login</button>
              </div>
              <div className="form-control mt-6">
                <GoogleLogin></GoogleLogin>
              </div>
              <div className="mt-6">
              <p>
                New here?{" "}
                <Link to="/register" className="text-red-500">
                  Register
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;