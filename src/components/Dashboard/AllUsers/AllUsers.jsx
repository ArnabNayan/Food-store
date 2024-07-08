import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    
    const axiosSecure=useAxiosSecure()
    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
           const res=await axiosSecure.get('/users')
           return res.data;
        }
    })
    const handleMakeAdmin=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name } is admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
        })
    }
    const handleDeleteUser=user=>{
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
                axiosSecure.delete(`/users/${user._id}`)
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
             <h1 className="text-center text-2xl lg:text-4xl text-yellow-600 font-serif font-bold">------Manage All Users------</h1>
             <div className="mt-5">
             <h2 className="text-2xl lg:text-4xl font-serif ">Total Users:{users.length} </h2> 
             </div>
             <div className="overflow-x-auto">
  <table className="table mt-5">
    {/* head */}
    <thead className="bg-yellow-600 text-white">
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="bg-slate-100">
     {
        users.map((user,index)=> <tr key={user._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>{user.name} </td>
        <td>{user.email}</td>
       <td> 
      {
            user.role==='admin'?'Admin': <button onClick={()=>handleMakeAdmin(user)} className="btn bg-orange-600 lg:btn-md btn-xs">
            <FaUsers className="text-white"></FaUsers>

            </button>
          }
        </td>
        <td> 
           <button onClick={()=>handleDeleteUser(user)} className="btn bg-rose-600 lg:btn-md btn-xs">
              <FaTrashAlt className="text-white"></FaTrashAlt>

              </button>
        </td>
      </tr>)
     }
     
     
    </tbody>
 
   
  </table>
</div>
        </div>
    );
};

export default AllUsers;