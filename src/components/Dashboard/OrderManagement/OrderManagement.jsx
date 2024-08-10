import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const OrderManagement = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
   
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments');
           
            return res.data;
        }
    });

    const mutation = useMutation({
        mutationFn: async (id) => {
            await axiosSecure.patch(`/payments/status/${id}`, { status: 'completed' });
        },
        onSuccess: () => {
            queryClient.invalidateQueries('payments');
        }
    });

    const handleStatusChange = (id) => {
        mutation.mutate(id);
    };

    return (
        <div>
            <h1 className="text-center text-2xl lg:text-4xl text-yellow-600 font-serif font-bold">------Order Management------</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra mt-4">
                    <thead className="bg-yellow-600">
                        <tr className="text-white">
                            <th></th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-100">
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.price}</td>
                                <td>{new Date(payment.date).toLocaleDateString()}</td>
                                <td>{payment.status}</td>
                                <td>
                                    {payment.status === 'pending' ? (
                                        <button
                                            className="btn bg-amber-500 text-white"
                                            onClick={() => handleStatusChange(payment._id)}
                                        >
                                            Done
                                        </button>
                                    ) : (
                                        <button className="btn btn-disabled" disabled>
                                            Completed
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderManagement;
