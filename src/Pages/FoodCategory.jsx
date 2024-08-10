import  { useState } from "react";

import { useLoaderData } from "react-router-dom";
import FoodCategoryDetails from "../components/FoodCategoryDetails/FoodCategoryDetails";
import Typewriter from 'typewriter-effect';

// eslint-disable-next-line react/prop-types
const FoodCategory = () => {
    const foodItems=useLoaderData()
    
    const categories = ["Main Course", "Seafoods", "Salads", "Appetizers", "Desserts"];
    const [activeCategory, setActiveCategory] = useState(categories[0]); // Initialize with the first category

    // Function to filter food items by category
    const filterByCategory = (category) => {
        // eslint-disable-next-line react/prop-types
        return foodItems?.filter(foodItem => foodItem.category === category);
    };

    const handleTabClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://t3.ftcdn.net/jpg/07/18/32/54/360_F_718325414_ObsGHJus1Y9k66JNBxBJaMIbL4oQopu0.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center  text-neutral-content">
          <div className="max-w-lg bg-slate-600 bg-opacity-50 p-5 lg:p-10 m-5">
         
            <h1 className="mb-5 text-2xl lg:text-4xl font-serif font-bold  text-orange-300">
            <Typewriter
  options={{
    strings: ['Choose your Food','Order from here'],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
            <p className="mb-5 text-lg lg:text-2xl font-serif font-semibold text-slate-400">Nice environment with delicious and pure food items,Enjoy the different tasty food from our shop.</p>
           
          </div>
        </div>
      </div>
            <div className="max-w-4xl mx-auto">
                <h1 data-aos="fade-up" data-aos-duration="2000" className="text-center mt-5 text-2xl lg:text-4xl text-amber-500 font-serif font-bold">------Food Items by Category------</h1>
                <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-wrap justify-center mb-4 mt-5">
                    {categories?.map(category => (
                        <button
                            key={category}
                            onClick={() => handleTabClick(category)}
                            className={`px-4 py-2 m-1 lg:mx-2 text-sm font-semibold rounded-full focus:outline-none ${activeCategory === category ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div data-aos="fade-up" data-aos-duration="2000"className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
                    {filterByCategory(activeCategory)?.map(foodItem => (
                        // eslint-disable-next-line react/prop-types
                        <FoodCategoryDetails   key={foodItem._id} foodItem={foodItem} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodCategory;
