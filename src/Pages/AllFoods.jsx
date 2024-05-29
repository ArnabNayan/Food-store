import { useLoaderData } from "react-router-dom";
import SingleFoodCardDetails from "../components/Dashboard/SingleFoodCardDetails";


const AllFoods = () => {
    const foods=useLoaderData()
  
    return (
        <div>
           <h1 className="text-center text-5xl text-amber-500  font-serif font-bold">------All Food Items------</h1>  
           <div className="flex flex-wrap justify-center gap-6 mt-10">
                {foods.map(food => (
                    <SingleFoodCardDetails key={food.id} food={food}></SingleFoodCardDetails>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;