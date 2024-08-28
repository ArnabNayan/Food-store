import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const[cart,refetch]=useCart()
    const axiosSecure=useAxiosSecure()
    const totalPrice=cart.reduce((total,item)=>total+parseInt(item.price),0)
    const handleDelete=id=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount>0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            
            }
          });
    }
    return (
        <div>
             <h1 className="text-center text-2xl lg:text-4xl text-yellow-600 font-serif font-bold">------My Cart------</h1>

             <div className="mt-5">
                <div className="flex justify-evenly">
                <h2 className="text-2xl lg:text-4xl font-serif ">Total Order: {cart.length}</h2>
                {
            cart.length ? <Link to="/dashboard/payment">
            <button  className="btn bg-yellow-600 text-white">Pay</button>
         </Link>:
                <button disabled className="btn bg-yellow-600 text-white">Pay</button>
           }
           
           <h2 className="text-2xl lg:text-4xl font-serif ">Total Price: {totalPrice} </h2> 
          
          


                </div>
             </div>
             <div className="overflow-x-auto ">
  <table className="table mt-5">
    {/* head */}
    <thead className="bg-yellow-600 text-white">
      <tr>
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
    
      </tr>
    </thead>
    <tbody className="bg-slate-100">
     {
        cart.map((item,index)=><tr key={item._id}>
            <th>
            {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image_url}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>{item.title}</td>
            <td>
              {item.price}
            
            </td>
        
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost lg:btn-md btn-xs">
              <FaTrashAlt className="text-orange-600"></FaTrashAlt>

              </button>
            </th>
          </tr>
         )
     }
      
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Cart;