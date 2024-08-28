import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const FoodieZone = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 justify-evenly mt-2">
            <div>
              <img data-aos="fade-up-right" data-aos-duration="2000" className="w-full transform transition-transform duration-300 hover:scale-110" src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
            </div>
            <div className="mt-2 lg:mt-8">
              <h1 data-aos="fade-up-left" data-aos-duration="2000" className="text-lg lg:text-5xl text-center font-serif font-bold text-amber-500">Welcome to the FoodieVerse Restaurent</h1>
             <p data-aos="fade-up-left" data-aos-duration="2000" className="text-slate-500 font-serif font-semibold text-center text-md lg:text-2xl mt-2">Get your favourite food from our restaurent,We ensure best service </p>
             <p data-aos="fade-up-left" data-aos-duration="2000"className="mt-5 lg:ms-12">
               <div className="flex flex-row gap-2 justify-start">
                 <div>
                    <FaArrowAltCircleRight className="text-amber-500 text-lg mt-1"></FaArrowAltCircleRight>
                 </div>
              
                    <h1 className="text-md lg:text-lg font-serif text-slate-400">Ensure Best Service for you</h1>
                

                </div> 
             </p>
             <p data-aos="fade-up-left" data-aos-duration="2000"className="mt-5 lg:ms-12">
               <div className="flex flex-row gap-2 justify-start">
                 <div>
                    <FaArrowAltCircleRight className="text-amber-500 text-lg mt-1"></FaArrowAltCircleRight>
                 </div>
              
                    <h1 className="text-md lg:text-lg font-serif text-slate-400">Ensure Quick Delivery to your place</h1>
                

                </div> 
             </p>
             <p data-aos="fade-up-left" data-aos-duration="2000"className="mt-5 lg:ms-12">
               <div className="flex flex-row gap-2 justify-start">
                 <div>
                    <FaArrowAltCircleRight className="text-amber-500 text-lg mt-1"></FaArrowAltCircleRight>
                 </div>
              
                    <h1 className="text-md lg:text-lg font-serif text-slate-400">Maintain 100% Fresh Foods</h1>
                

                </div> 
             </p>
             <p data-aos="fade-up-left" data-aos-duration="2000" className="mt-5 lg:ms-12">
               <div className="flex flex-row gap-2 justify-start">
                 <div>
                    <FaArrowAltCircleRight className="text-amber-500 text-lg mt-1"></FaArrowAltCircleRight>
                 </div>
              
                    <h1 className="text-md lg:text-lg font-serif text-slate-400">Always Have Good Offer</h1>
                

                </div> 
             </p>
             <Link data-aos="zoom-in" data-aos-duration="2000" to="/about">
             <button className="bg-amber-500 hover:bg-amber-700 text-white font-serif rounded-md lg:mt-10 mt-5 lg:ms-10 py-3 px-6">About us</button>
             </Link>
            
            </div>
        </div>
    );
};

export default FoodieZone;