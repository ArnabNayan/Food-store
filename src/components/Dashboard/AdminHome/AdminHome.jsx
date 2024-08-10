import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaMoneyCheckAlt, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,Pie,Cell
} from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#413ea0'];

const AdminHome = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:stats=[]}=useQuery({
        queryKey:['admin-stats'],
        queryFn:async()=>{
            const res = await axiosSecure.get('admin-stats')
            return res.data
        }
    })
   
    const {data:chartData=[]}=useQuery({
      queryKey:['order-stats'],
      queryFn: async()=>{
        const res=await axiosSecure.get('/order-stats');
        return res.data
      }
    })
 
    //custom shape for the pie chart

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const pieChartData=chartData.map(data=>{
  return {name:data.category,value:data.revenue}
})

    return (
        <div className="p-4">
           
            {
                user?.displayName?<h3 className="text-lg lg:text-3xl font-serif font-semibold">Hi, Welcome here<span className="text-lg lg:text-3xl font-serif font-semibold text-yellow-600 "> {user.displayName}</span></h3> :'Back'
               }
                 
                 <div className="stats bg-transparent mt-10 gap-3 flex flex-wrap justify-center">
  <div className="stat bg-sky-500 rounded-2xl w-48">
    <div className="stat-figure text-secondary">
      <FaMoneyCheckAlt className="text-3xl text-white"></FaMoneyCheckAlt>
    </div>
    <div className="stat-title font-serif font-semibold text-white">Total Revenue</div>
    <div className="stat-value  font-semibold text-white">{stats.revenue}</div>
   
  </div>

  <div className="stat  bg-rose-600 rounded-2xl w-52">
    <div className="stat-figure text-secondary">
      <FaUsers className="text-3xl text-white"></FaUsers>
    </div>
    <div className="stat-title font-serif font-semibold text-white">Total Users</div>
    <div className="stat-value font-serif font-semibold text-white">{stats.users}</div>
   
  </div>

  <div className="stat bg-teal-600 rounded-2xl w-48">
    <div className="stat-figure text-secondary">
      <FaUtensils className="text-3xl text-white"></FaUtensils>
    </div>
    <div className="stat-title  font-serif font-semibold text-white">Total Foods</div>
    <div className="stat-value  font-serif font-semibold text-white">{stats.foodItems}</div>
 
  </div>
  <div className="stat bg-indigo-500 rounded-2xl w-48">
    <div className="stat-figure text-secondary">
     <FaShoppingCart  className="text-3xl text-white"></FaShoppingCart>
    </div>
    <div className= "slat-title font-serif font-semibold text-white">Total Orders</div>
    <div className="stat-value font-serif font-semibold text-white">{stats.totalOrders}</div>
 
  </div>
</div>

     <div className="flex flex-col lg:flex-row mt-5 gap-5">
        <div className="w-full lg:w-1/2">
        <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="quantity" fill="#8884d8" stroke="#8884d8" /> {/* Adjusted fill color */}
                            <Bar dataKey="quantity" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="quantity" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
        </div>

        <div className="w-full lg:w-1/2">
           <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Legend />
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>


        </div>
      </div>         
      <div className="flex flex-col lg:flex-row mt-10 gap-2 ">
          <div className="w-full lg:w-1/2">
          <div className="bg-amber-100 p-5 h-80">
          
          <img className="border border-teal-400 rounded-full w-60 h-60 mx-auto" src={user?.photoURL} alt="" />
          <h2 className="font-serif font-semibold mt-4 text-center text-lg lg:text-3xl">{user?.displayName}</h2>
          </div>
           
          </div>
          <div className="w-full lg:w-1/2 ">
          <div className="bg-orange-100 p-5 h-80">
             <h2 className="text-lg lg:text-3xl font-serif font-semibold">Total Activities</h2>
             <div className="flex gap-3 mt-3 font-serif">
             <div className=" text-teal-600">
                   <FaUtensils className="text-xl"></FaUtensils>
                 </div>
               <div className="text-xl text-teal-600">Total foods :</div>
               <div className="text-xl text-teal-600">{stats.foodItems}</div>
             </div>
             <div className="flex gap-3 mt-1 font-serif">
             <div className=" text-rose-600">
                   <FaMoneyCheckAlt className="text-xl"></FaMoneyCheckAlt>
                 </div>
               <div className="text-xl text-sky-500">Total Revenue :</div>
               <div className="text-xl text-sky-500">{stats.revenue}</div>
             </div>
             <div className="flex gap-3 mt-1 font-serif">
             <div className=" text-indigo-500">
                   <FaShoppingCart  className="text-xl"></FaShoppingCart>
                 </div>
               <div className="text-xl text-indigo-500">Total Orders :</div>
               <div className="text-xl text-indigo-500">{stats.totalOrders}</div>
             </div>
             <div className="flex gap-3 mt-1 font-serif">
             <div className=" text-rose-600">
                   <FaUsers className="text-xl"></FaUsers>
                 </div>
               <div className="text-xl text-rose-600">Total Users :</div>
               <div className="text-xl text-rose-600">{stats.users}</div>
             </div>
           </div>
          </div>

        </div>
        </div>
    );
};

export default AdminHome;