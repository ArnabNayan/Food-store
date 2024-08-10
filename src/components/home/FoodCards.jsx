import { Link } from "react-router-dom";
// import StarRating from "../StarRating";
const discountedPrices = [
    { id: 1, price: 350 }, // Discounted price for item with index 1
    { id: 3, price: 300 }, // Discounted price for item with index 3
    { id: 6, price: 580 }, // Discounted price for item with index 6
    // Add more as needed
];

// eslint-disable-next-line react/prop-types
const FoodCards = ({food,index}) => {
    // eslint-disable-next-line react/prop-types
    const {_id,title,image_url,description,price,special_offers}=food;
     

    // Find the discounted price based on the index
    const discountedPriceEntry = discountedPrices.find(item => item.id === index);
    const discountedPrice = discountedPriceEntry ? discountedPriceEntry.price : null;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="h-80 transform transition-transform duration-300 hover:scale-110" src={image_url} alt="Food" /></figure>
        <div className="card-body">
          <h2 data-aos="fade-up" data-aos-duration="1000" className="card-title font-bold font-serif text-lg lg:text-2xl">{title}</h2>
          <p data-aos="fade-up" data-aos-duration="2000" className="absolute right-0 top-0 mr-4 px-4 text-md font-serif bg-amber-500 text-white ">{special_offers}</p>
          <p data-aos="fade-up" data-aos-duration="2000" className="font-serif text-md lg:text-lg">{description}</p>
          <p data-aos="fade-up" data-aos-duration="2000" className="font-serif text-md lg:text-lg">Price:
                {discountedPrice ? (
                        <>
                            <span className="line-through mr-2">{discountedPrice} tk</span>
                            <span>{price} tk</span>
                        </>
                    ) : (
                        <span>{price} tk</span>
                    )}                   
               </p>
          {/* <p data-aos="fade-up" data-aos-duration="2000" className="font-serif text-md lg:text-lg "> <StarRating rating={ratings} /></p> */}
          <div className="card-actions justify-end">
            <Link data-aos="zoom-in" data-aos-duration="2000" to={`/foods/${_id}`} className="btn bg-amber-500 font-bold font-serif px-5 text-md lg:text-lg">Details</Link>
          </div>
        </div>
      </div>
    );
};

export default FoodCards;