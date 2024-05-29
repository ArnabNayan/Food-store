import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const food=useLoaderData()
    const{title,image_url,description,price,ratings,ingredients,special_offers,preparation_time}=food;
    return (
       <>
          <div className="hero min-h-screen  bg-yellow-100">
        <div className="hero-content  flex-col lg:flex-row-reverse border border-amber-500 p-4 rounded-lg shadow-lg">
          <img src={image_url}className="max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold font-serif">{title}</h1>
            <p className="py-2 text-xl font-sherif">{description}</p>
            <p className="py-2 text-xl font-sherif">Price:{price} tk</p>
            <p className="py-2 text-xl font-sherif">Ingredients:{ingredients}</p>
            <p className="py-2 text-xl font-sherif">Making Time:{preparation_time}</p>
            <p className="py-2 text-xl font-sherif">Offers:{special_offers}</p>
            <p className="py-2 text-xl font-sherif">{ratings}</p>
           
         <div className="flex items-center justify-center mt-36 ">
           <button className="btn bg-amber-500  rounded-lg px-10 text-lg font-serif"><Link to="/">Back</Link></button>
         </div>
     
          </div>
        </div>
         
      </div>
      
       </>
    );
};

export default FoodDetails;