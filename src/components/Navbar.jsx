import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
  const{user,logOut}=useAuth()
  const handleLogOut=async()=>{
   await logOut()
  }
    return (
        <div className="navbar bg-amber-400 z-[1] px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-400 rounded-box w-52 font-serif font-bold">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/dashboard"> Dashboard</Link></li>
              <li><Link to="/login"> Login</Link></li>
            </ul>
          </div>
          <a className="font-serif font-bold text-amber-800 text-4xl">Food Restaurent</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">
            <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/">Home</Link></li>
            <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/about">About Us</Link></li>
            <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/dashboard">Dashboard</Link></li>
            <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
        {
            user&& (
              <button onClick={handleLogOut} className="btn bg-amber-500 font-serif font-bold px-4 text-xl">LogOut</button>
            )
         }
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL||"public/placeholder.jpg"} />
        </div>
      </div>
        </div>
      </div>
    );
};

export default Navbar;