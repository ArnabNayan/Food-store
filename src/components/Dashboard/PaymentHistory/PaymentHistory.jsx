import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure()
    const {data:payments=[]}=useQuery({
        queryKey:['payments',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
           <h2 className="text-2xl lg:text-4xl font-serif text-center">Total Payments: {payments.length} </h2> 

            <div className="overflow-x-auto">
  <table className="table table-zebra mt-4">
    {/* head */}
    <thead className="bg-yellow-600">
      <tr className="text-white">
        <th></th>
        <th>Image</th>
        <th>Transaction Id</th>
        <th>price</th>
        <td>Date</td>
        <th>Status</th>
       
      </tr>
    </thead>
    <tbody className="bg-slate-100">
        {
            payments.map((payment,index)=><tr key={payment._id}>
                <th>{index+1}</th>
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
                <td>{payment.transactionId}</td>
                <td>{payment.price}</td>
                <td>{payment.date}</td>
                 <td> {payment.status}</td>
              </tr>
           )
        }
     
      
    </tbody>
  </table>
</div>
   
        </div>
    );
};

export default PaymentHistory;