import { useLoaderData } from "react-router-dom";
import SingleFoodCardDetails from "../components/Dashboard/SingleFoodCardDetails";


const AllFoods = () => {
    const foods=useLoaderData()
  
    return (
        <div>
           <h1 className="text-center text-2xl lg:text-4xl text-amber-500  font-serif font-bold">------All Food Items------</h1>  
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {foods.map(food => (
                  
                    <SingleFoodCardDetails key={food._id} food={food}></SingleFoodCardDetails>
                ))}
            </div>

            
        </div>
    );
};

export default AllFoods;