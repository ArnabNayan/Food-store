import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const FoodCards = ({food}) => {
    // eslint-disable-next-line react/prop-types
    const {id,title,image_url,description,price,ratings}=food;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className="" src={image_url} alt="Food" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold font-serif text-2xl">{title}</h2>
          <p className="font-serif text-lg">{description}</p>
          <p className="font-serif text-lg">Price:{price} tk</p>
          <p className="font-serif text-lg ">Ratings:{ratings}</p>
          <div className="card-actions justify-end">
            <Link to={`/foods/${id}`} className="btn bg-amber-500 font-bold font-serif px-5 text-lg">Details</Link>
          </div>
        </div>
      </div>
    );
};

export default FoodCards;