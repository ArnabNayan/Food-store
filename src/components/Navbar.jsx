// import { Link } from "react-router-dom";
// import useAuth from "../hooks/useAuth";


// const Navbar = () => {
//   const{user,logOut}=useAuth()
//   const handleLogOut=async()=>{
//    await logOut()
//   }
//     return (
//         <div className="navbar bg-amber-400 z-[1] px-2">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-400 rounded-box w-52 font-serif font-bold">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About Us</Link></li>
//               <li>
//           <a>Order</a>
//           <ul className="p-2 bg-amber-400">
//                 <li>
//                   <Link to="/food-items">Food Items</Link>
//                 </li>
//                 <li>
//                   <Link to="/order-by-category">Order by Category</Link>
//                 </li>
//               </ul>
//         </li>
               
//               <li><Link to="/dashboard"> Dashboard</Link></li>
//               <li><Link to="/login"> Login</Link></li>
//             </ul>
//           </div>
//           <a className="font-serif font-bold text-amber-800 text-2xl lg:text-4xl">FoodiVerse</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal  px-1">
//             <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/">Home</Link></li>
//             <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/about">About Us</Link></li>
//             <li>
//         <details>
//           <summary className="text-lg text-slate-700 font-serif font-bold">Order</summary>
//           <ul className="p-2 shadow bg-amber-400 rounded-md w-52 ">
//           <li>
//                 <Link className="text-lg text-slate-700 border border-white font-serif font-bold" to="/food-items">Food Items</Link>
//               </li>
//               <li>
//                 <Link className="text-lg text-slate-700 border border-white font-serif font-bold" to="/order-by-category">Order by Category</Link>
//               </li>
//           </ul>
//         </details>
//       </li>
            
//             <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/dashboard">Dashboard</Link></li>
//             <li className="lg:text-lg text-slate-700 font-serif font-bold"><Link to="/login">Login</Link></li>
//           </ul>
//         </div>
//         <div className="navbar-end space-x-2">
//         {
//             user&& (
//               <button onClick={handleLogOut} className="btn bg-amber-500 font-serif font-bold px-4 text-lg lg:text-xl">LogOut</button>
//             )
//          }
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img src={user?.photoURL||"public/placeholder.jpg"} />
//         </div>
//       </div>
//         </div>
//       </div>
//     );
    
// };

// export default Navbar;
import { useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {  FaHamburger, FaShoppingCart } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAdmin]=useAdmin()
  const [cart]=useCart()
  const handleLogOut = async () => {
    await logOut();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="navbar bg-amber-400 z-[1] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden" 
            onClick={toggleDropdown}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul 
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-400 rounded-box w-52 font-serif font-bold transition-all duration-300 ease-in-out transform origin-top ${dropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
          >
            <li><Link to="/" onClick={closeDropdown}>Home</Link></li>
            <li><Link to="/about" onClick={closeDropdown}>About Us</Link></li>
            <li><Link to="/contact" onClick={closeDropdown}>Contact</Link></li>
            <li>
            <Link to="/dashboard/cart">
            
             
              <div className="indicator flex items-center relative">

              <span className="indicator-item badge bg-amber-700 text-white absolute top-0 right-0">+{cart.length}</span>

              <button className='btn btn-sm bg-amber-500 bg-opacity-25 hover:bg-amber-500 -mb-0'>
              <FaShoppingCart size={7} className='mr-2'></FaShoppingCart>
            </button>
            </div>

            </Link>
          </li>
            <li tabIndex={0} onClick={closeDropdown}>
              <details>
                <summary>Order</summary>
                <ul className="p-2 bg-amber-400">
                  <li><Link to="/food-items" onClick={closeDropdown}>Food Items</Link></li>
                  <li><Link to="/order-by-category" onClick={closeDropdown}>Order by Category</Link></li>
                </ul>
              </details>
            </li>

            {
            user&&isAdmin &&  <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/dashboard/adminHome">Dashboard</Link></li>
          }
         {
            user&& !isAdmin &&  <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/dashboard/userHome">Dashboard</Link></li>
          }
            {/* <li><Link to="/login" onClick={closeDropdown}>Login</Link></li> */}
          </ul>
        </div>
        <a className="font-serif font-bold text-amber-800 text-2xl ms-6 lg:ms-10 lg:text-4xl"><FaHamburger className='-mb-6 lg:-mb-9 -ms-8 lg:-ms-10'> </FaHamburger> FoodiVerse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/">Home</Link></li>
          <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/about">About Us</Link></li>
          <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/dashboard/cart">
            
             
              <div className="indicator flex items-center relative">

              <span className="indicator-item badge bg-amber-700 text-white absolute top-0 right-0">+{cart.length}</span>

              <button className='btn btn-sm bg-amber-500 bg-opacity-25 hover:bg-amber-500 -mb-6'>
              <FaShoppingCart size={16} className='mr-2'></FaShoppingCart>
            </button>
            </div>

            </Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary className="text-lg text-slate-700 font-serif font-bold">Order</summary>
              <ul className="p-2 shadow bg-amber-400 rounded-md w-52">
                <li><Link className="text-lg text-slate-700 border border-white font-serif font-bold" to="/food-items">Food Items</Link></li>
                <li><Link className="text-lg text-slate-700 border border-white font-serif font-bold" to="/order-by-category">Order by Category</Link></li>
              </ul>
            </details>
          </li>
          {
            user&&isAdmin &&  <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/dashboard/adminHome">Dashboard</Link></li>
          }
         {
            user&& !isAdmin &&  <li className="text-lg text-slate-700 font-serif font-bold"><Link to="/dashboard/userHome">Dashboard</Link></li>
          }
         
          {/* <li className="lg:text-lg text-slate-700 font-serif font-bold"></li> */}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <button onClick={handleLogOut} className="btn bg-amber-500 font-serif font-bold px-4 text-lg lg:text-xl">LogOut</button>
        )}
        {
          !user&&(
            <Link to="/login"className="btn bg-amber-500 font-serif font-bold px-4 text-lg lg:text-xl">Login</Link>
          )
        }
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL || "public/placeholder.jpg"} alt="User Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


