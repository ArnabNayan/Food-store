import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Login-registration/GoogleLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";



const Registration = () => {
    const [pass,setPass]=useState(true)
    const {createUser,user}=useAuth()
    const location=useLocation()
    const navigate=useNavigate()
    const from=location?.state?.from?.pathname||'/';
    const handleSubmit=(e)=>{
      e.preventDefault();
      const form=e.target;
      const email=form.email.value;
      const password=form.password.value;
      const confirm_password=form.confirm_password.value;
      if(password!==confirm_password){
         setPass(false)
      }
      console.log(email,password,confirm_password)
      if(password==confirm_password){
        createUser(email,password)
        if(user){
          navigate(from)
        }
      }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-amber-500">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"name="email" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password"required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Confirm Password</span>
                </label>
                <input type="password" placeholder="confirm password" className="input input-bordered"name="confirm_password" required />
                
              </div>
             {
                !pass && (
                    <div className="my-2">
                        <h1 className="text-red-500">Password does not match</h1>
                    </div>
                )
             }
              <div className="form-control mt-6">
                <button className="btn bg-amber-500 text-xl">Register</button>
              </div>
              <div className="form-control mt-6">
                <GoogleLogin></GoogleLogin>
              </div>
              <div className="mt-6">
              <p>
                Already Have an Account?{" "}
                <Link to="/login" className="text-red-500">
                  Login
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Registration;