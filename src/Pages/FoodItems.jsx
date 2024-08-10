import { useLoaderData } from "react-router-dom";
import FoodItemsDetails from "../components/FoodItemsDetails/FoodItemsDetails";
import Typewriter from 'typewriter-effect';
import { useState } from "react";

const FoodItems = () => {
    const foodItems=useLoaderData()
    const [visibleCount,setVisibleCount]=useState(16)
   const handleSeeMore=()=>{
    setVisibleCount((previousCount)=>previousCount+16)
   }
    return (
        <div>
         
         <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/banner-meat-vegetable-dishes-snacks-black-background-top-view-free-space-your-text_187166-34685.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center  text-neutral-content">
          <div className="max-w-lg bg-slate-600 bg-opacity-50 p-10 m-5">
         
            <h1 className="mb-5 text-2xl lg:text-4xl font-serif font-bold  text-orange-300">
            <Typewriter
  options={{
    strings: ['Visit our FoodItems','Choose your foodItem'],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
            <p className="mb-5 text-lg lg:text-2xl font-serif font-semibold text-slate-400">Nice environment with delicious and pure food items,Enjoy the different tasty food from our shop.</p>
           
          </div>
        </div>
      </div>
     
             <h1 data-aos="fade-up" data-aos-duration="2000" className="text-center text-2xl mt-5 lg:text-4xl text-amber-500  font-serif font-bold">------All Food Items------</h1> 
             <div className="flex justify-center py-10">
             <div data-aos="fade-up" data-aos-duration="2000" className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-8">
                 {
                    foodItems.slice(0,visibleCount).map((foodItem,index)=>(
                        <FoodItemsDetails data-aos="fade-up" data-aos-duration="2000"  key={foodItem._id}foodItem={foodItem}index={index+1}></FoodItemsDetails>
                    ))
                } 
             </div>
            </div> 
            {
              visibleCount<foodItems.length&&
              (
                <div className="flex justify-center">
                   <button data-aos="zoom-in" data-aos-duration="2000" onClick={handleSeeMore} className="btn btn-fill px-6 text-md lg:text-xl font-serif text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">See More</button>
                </div>
              )
            }

        </div>
    );
};

export default FoodItems;