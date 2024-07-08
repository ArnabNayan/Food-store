import FoodCards from "./FoodCards";





// eslint-disable-next-line react/prop-types
const Foods = ({data}) => {
    return (
        <div>
           <h1 className="text-center text-2xl lg:text-4xl text-amber-500 mt-10 font-serif font-bold">------Our Food Items------</h1>
           <div className="flex justify-center py-5">
           <div className="grid lg:grid-cols-3  gap-10">
          {
           
           // eslint-disable-next-line react/prop-types
           data.slice(0,6).map((food,index)=>(
             
            <div key={food.id}className="flex items-center justify-center ">
                <FoodCards food={food} index={index+1}>
                    </FoodCards>
                </div>
            
           ))
        } 
          </div>

           </div>
         
        </div>
    );
};

export default Foods;