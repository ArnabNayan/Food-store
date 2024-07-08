import { FaHome, FaMoneyCheckAlt,  FaRegEdit, FaShoppingCart, FaTasks, FaUserCircle, FaUsers, FaUserShield, FaUtensils } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


// const DashboardLayout = () => {
//     return (
    //     <div className="grid grid-cols-12">
         
    //   <div className="col-span-2 bg-slate-600 min-h-screen p-12 text-white">
    //   <div className="bg-amber-500 flex items-center justify-center h-24">
    //   <a className="font-serif font-bold text-white text-2xl w-full text-center">Food Restaurant</a>
    // </div>
    //     <ul>
    //       <li className=" p-4 font-sherif font-bold  text w-full">
    //         <Link to={""}>Dashboard</Link>
    //       </li>
    //       <li className=" font-sherif font-bold p-4 text w-full">
    //         <Link to={"all-foods"}>All Foods</Link>
    //       </li>
    //       <li className=" p-4 font-sherif font-bold text w-full">
    //         <Link to={"add-food"}>Add Food</Link>
    //       </li>
       
    //       <li className=" font-sherif font-bold p-4 text w-full">
    //         <Link to={"/"}>Home</Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="col-span-10 p-20">
    //     <Outlet />
    //   </div>
    // </div>


{/* <div className="grid grid-cols-12 min-h-screen">
  <div className="col-span-2 bg-yellow-600 text-white flex flex-col">
    <div className="bg-amber-400 h-24 flex items-center justify-center">
      <a className="font-serif font-bold text-amber-800 text-2xl lg:text-4xl w-full text-center">FoodiVerse</a>
    </div>
    <ul className="flex-grow space-y-1">
      <li className="font-serif font-bold w-full">
        <Link to={""} className="block p-4 border border-white text-black text-center hover:bg-yellow-500">Dashboard</Link>
      </li>
      <li className="font-serif font-bold w-full">
        <Link to={"all-foods"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500">Manage Foods</Link>
      </li>
      <li className="font-serif font-bold w-full">
        <Link to={"add-food"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500">Add Food</Link>
      </li>
      <li className="font-serif font-bold w-full">
        <Link to={"/"} className="block p-4 text-black border border-white text-center hover:bg-yellow-500">Home</Link>
      </li>
    </ul>
  </div>
  <div className="col-span-10 p-10 bg-gray-100">
    <Outlet />
  </div>
</div>



  
    );
};

export default DashboardLayout; */}

const DashboardLayout = () => {
  const [cart]=useCart()
  const [isAdmin]=useAdmin();
  return (
      <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-12 md:col-span-2 bg-yellow-600 text-white flex flex-col">
              <div className="bg-amber-400 h-24 flex items-center justify-center">
                  <a className="font-serif font-bold text-amber-800 text-2xl lg:text-4xl w-full text-center">FoodiVerse</a>
              </div>
              <ul className="flex-grow space-y-1">
                {
                  isAdmin?
                  <>
                  <li className="font-serif font-bold w-full">
                      <Link to={""} className="block p-4 border border-white text-black text-center hover:bg-yellow-500"><FaUserShield className="-mb-5 ms-36 lg:ms-5"></FaUserShield>Admin Home</Link>
                  </li>
                  <li className="font-serif font-bold w-full">
                      <Link to={"users"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500"><FaUsers className="-mb-5 ms-36 lg:ms-4"></FaUsers>Manage Users</Link>
                  </li>
                  <li className="font-serif font-bold w-full">
                      <Link to={"all-foods"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500"><FaTasks className="-mb-5 ms-36 lg:ms-4"></FaTasks>Manage Foods</Link>
                  </li>
                 
                  
                  <li className="font-serif font-bold w-full">
                      <Link to={"add-food"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500"><FaUtensils className="-mb-5 ms-40 lg:ms-8"></FaUtensils>Add Food</Link>
                  </li>
                  </>:
                  <>
                     <li className="font-serif font-bold w-full">
                      <Link to={"userHome"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500"><FaUserCircle className="-mb-5 ms-36 lg:ms-6"></FaUserCircle>User Home</Link>
                  </li>
                  <li className="font-serif font-bold w-full">
                      <Link to={"cart"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500"><FaShoppingCart className="-mb-5 ms-40 lg:ms-8"></FaShoppingCart>My Cart({cart.length})</Link>
                  </li>
                  <li className="font-serif font-bold w-full">
                      <Link to={"review"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500"><FaRegEdit className="-mb-5 ms-36 lg:ms-6"></FaRegEdit>  Add Review</Link>
                  </li>
                  <li className="font-serif font-bold w-full">
                      <Link to={"payment"} className="block p-4 border border-white text-black text-center hover:bg-yellow-500"><FaMoneyCheckAlt className="-mb-5 ms-32 lg:ms-1"></FaMoneyCheckAlt>Payment History</Link>
                  </li>
                  </>
                }
                  
                 
                  <li className="font-serif font-bold w-full">
                      <Link to={"/"} className="block p-4 text-black border border-white text-center hover:bg-yellow-500"><FaHome className="-mb-5 ms-40 lg:ms-10"></FaHome>Home</Link>
                  </li>
              </ul>
          </div>
          <div className="col-span-12 md:col-span-10 p-4 md:p-10 bg-gray-100">
              <Outlet />
          </div>
      </div>
  );
};

export default DashboardLayout;