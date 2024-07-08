import { Link, useLoaderData } from "react-router-dom";
import StarRating from "../components/StarRating";

const DashboardFoodDetails = () => {
    const food=useLoaderData()
    const{title,image_url,description,price,ratings,ingredients,special_offers,preparation_time}=food;
    return (
        <div className="hero p-4">
        <div className="hero-content  flex-col lg:flex-row border border-amber-500 p-2 ">
          <img src={image_url}className=" rounded-md shadow-md h-96 w-96" />
          <div>
            <h1 className="text-xl lg:text-4xl font-bold font-serif">{title}</h1>
            <p className="py-2 text-lg lg:text-xl font-sherif">{description}</p>
            <p className="py-2 text-lg lg:text-xl font-sherif">Price:{price} tk</p>
            <p className="py-2 text-lg lg:text-xl font-sherif">Ingredients:{ingredients}</p>
            <p className="py-2 text-lg lg:text-xl font-sherif">Making Time:{preparation_time}</p>
            <p className="py-2 text-lg lg:text-xl font-sherif">Offers:{special_offers}</p>
            <p className="py-2 text-lg lg:text-xl font-sherif"><StarRating rating={ratings} /></p>
           
         <div className="flex items-center justify-center mt-36 ">
           <button className="btn bg-amber-500  rounded-lg px-10 text-lg font-serif"><Link to="/food-items">Back</Link></button>
         </div>
     
          </div>
        </div>
         
      </div>
    );
};

export default DashboardFoodDetails;