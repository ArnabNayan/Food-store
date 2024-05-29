import FoodCards from "./FoodCards";





// eslint-disable-next-line react/prop-types
const Foods = ({data}) => {
    return (
        <div>
           <h1 className="text-center text-5xl text-amber-500 mt-16 font-serif font-bold">------Our Food Items------</h1>
          <div className="grid lg:grid-cols-3 mt-14 gap-10">
          {
           
           // eslint-disable-next-line react/prop-types
           data.slice(0,6).map(food=>(
             
            <div key={food.id}className="flex items-center justify-center ">
                <FoodCards food={food}>
                    </FoodCards>
                </div>
            
           ))
        } 
          </div>
        </div>
    );
};

export default Foods;