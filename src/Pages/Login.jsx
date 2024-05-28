import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../Login-registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";


const Login = () => {
  const {signIn,user}=useAuth()
  const location=useLocation()
  const navigate=useNavigate()
  const from=location?.state?.from?.pathname||'/';
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(email, password);
      await signIn(email,password)
    }
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password"required />
                
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