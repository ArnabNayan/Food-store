
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import StarRating from "../StarRating";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



// eslint-disable-next-line react/prop-types
const FoodCategoryDetails = ({foodItem}) => {
    // eslint-disable-next-line react/prop-types
    const {  title, image_url, price, special_offers,_id} = foodItem;
    const {user}= useAuth();
    const navigate=useNavigate()
    const location=useLocation()
    const axiosSecure=useAxiosSecure()
    const[,refetch]=useCart()
    const handleAddtoCart=food=>{
        if(user&& user.email){
            
             console.log(user.email,food)
             const cartItem={
                menuId:_id,
                email:user.email,
                title,
                image_url,
                price
             }
             axiosSecure.post('/carts',cartItem)
             .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${title} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
              
             })
           
        }
        else{
            Swal.fire({
                title: "You are not logged In",
                text: "Please login first to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please,login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}})
                }
              });
        }
    }
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
        <figure className=" w-full h-48 lg:h-64 bg-cover bg-center transform transition-transform duration-300 hover:scale-110" style={{ backgroundImage: `url(${image_url})` }}>
            {/* Use background image to ensure uniform size */}
        </figure>
        <div className="card-body p-4 flex flex-col justify-between">
            <div>
                <h2 data-aos="fade-up" data-aos-duration="2000" className="card-title font-bold text-lg lg:text-2xl mb-2">{title}</h2>
                <p data-aos="fade-up" data-aos-duration="2000" className="font-serif text-md lg:text-lg mb-2">Price: {price} tk</p>
                <p data-aos="fade-up" data-aos-duration="2000" className="absolute right-0 top-0 ml-6 lg:px-4 text-md font-serif bg-amber-500 text-white">{special_offers}</p>
                {/* <p className="font-serif text-md lg:text-lg mb-2"><StarRating rating={ratings} /></p> */}
            </div>
            <div className="card-actions mt-4 mx-auto">
                <button data-aos="zoom-in" data-aos-duration="2000" onClick={()=>handleAddtoCart(foodItem)} className="btn bg-amber-500 text-white font-bold px-4 py-2 rounded-lg w-full lg:w-auto">Order Now</button>
            </div>
        </div>
    </div>
    );
};

export default FoodCategoryDetails;




