import { Link } from "react-router-dom";
// import StarRating from "../StarRating";


// eslint-disable-next-line react/prop-types
// const FoodItemsDetails = ({foodItem}) => {
//     // eslint-disable-next-line react/prop-types
//     const { _id, title, image_url,  price, ratings,category } = foodItem;
   
//     return (
//         <div className="card w-72 h-96 bg-base-100 shadow-xl flex flex-col">
//         <figure  className="h-56 overflow-hidden">
//                 <img className="w-full h-full object-cover" src={image_url} alt="Food" />
//             </figure>
//         <div className="card-body flex-grow flex flex-col justify-between">
//           <h2 className="card-title font-bold font-serif text-lg lg:text-2xl">{title}</h2>
          
//           <p className="font-serif text-md lg:text-lg">Price: {price} tk</p>
//           <p className="font-serif text-md lg:text-lg">Category: {category} </p>
//           <p className="font-serif text-md lg:text-lg">Ratings: {ratings}</p>
//           <div className="card-actions justify-end">
//             <Link to={`food-details/${_id}`} className="btn bg-amber-500 font-bold font-serif px-2 text-md">Details</Link>
           
//           </div>
//         </div>
//       </div>
//     );
// };

// export default FoodItemsDetails;
const discountedPrices = [
    { id: 1, price: 320 }, // Discounted price for item with index 1
    { id: 3, price: 170 }, // Discounted price for item with index 3
    { id: 6, price: 520 },
    { id: 8, price:425 }, 
    { id: 9, price: 500 }, 
    { id: 11, price: 275 }, 
    { id: 12, price: 200 },
    { id: 14, price: 580 }, 
    { id: 15, price: 340 },
    { id: 17, price: 400 },
    { id: 27, price: 380 },
    { id: 30, price: 360 },  // Discounted price for item with index 6
    // Add more as needed
];


// eslint-disable-next-line react/prop-types
const FoodItemsDetails = ({ foodItem ,index}) => {
    // eslint-disable-next-line react/prop-types
    const { _id, title, image_url, price,  category,special_offers } = foodItem;
    
    const discountedPriceEntry = discountedPrices.find(item => item.id === index);
    const discountedPrice = discountedPriceEntry ? discountedPriceEntry.price : null;
    return (
   
       
        <div data-aos="fade-up" data-aos-duration="2000" className="card bg-base-100 shadow-xl rounded-lg overflow-hidden">
            <figure className="h-64 bg-cover bg-center transform transition-transform duration-300 hover:scale-110" style={{ backgroundImage: `url(${image_url})` }}>
                {/* Use background image to ensure uniform size */}
            </figure>
            <div className="card-body p-4 flex flex-col justify-between">
                <div>
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="card-title font-bold text-lg lg:text-2xl mb-2">{title}</h2>
                    <p data-aos="fade-up" data-aos-duration="2000"className="absolute right-0 top-0 ml-6 lg:px-4 text-md font-serif bg-amber-500 text-white ">{special_offers}</p>
                    <p data-aos="fade-up" data-aos-duration="2000" className="font-serif text-md lg:text-lg mb-2">Price: 
                    {discountedPrice ? (
                        <>
                            <span className="line-through mr-2">{discountedPrice} tk</span>
                            <span>{price} tk</span>
                        </>
                    ) : (
                        <span>{price} tk</span>
                    )}         
                    </p>
                    <p data-aos="fade-up" data-aos-duration="2000"className="font-serif text-md lg:text-lg mb-2">Category: {category}</p>
                    {/* <p className="font-serif text-md lg:text-lg mb-2"><StarRating rating={ratings} /></p> */}
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000"className="card-actions mt-4">
                    <Link to={`food-details/${_id}`} className="btn bg-amber-500 text-white font-bold px-4 py-2 rounded-lg">Details</Link>
                </div>
            </div>
        </div>
  
    );
};

export default FoodItemsDetails;