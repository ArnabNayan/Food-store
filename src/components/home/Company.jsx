import Marquee from "react-fast-marquee";

const Company = () => {
    return (
        <div className="mt-5">
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center text-2xl lg:text-4xl text-amber-500 mt-5 font-serif font-bold">
                ------Our Partners------
            </h1>
             <Marquee className="bg-slate-100 p-5 mt-2">
               <img className="w-full h-48 "  src="https://png.pngtree.com/template/20210107/ourmid/pngtree-eco-fresh-food-logo-image_471909.jpg" alt="" />
               <img className="w-full h-48"  src="https://img.freepik.com/premium-vector/healthy-food-logo-icon-vector-template_644408-657.jpg" alt="" />
               <img className="w-full h-48"  src="https://png.pngtree.com/template/20190904/ourmid/pngtree-the-fruit-stem-leaves-look-fresh-for-healthy-food-company-image_302520.jpg" alt="" />
               <img className="w-full h-48"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgudDEUSJSKbjm9UGzdURCPSyZMofPLG9T6qZkNeDmliCyTKXX0zeJuK2ERKQNX1FW8MQ&usqp=CAU" alt="" />
               <img className="w-full h-48"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJh8R_bfRtCW9lWRwVIiBPoGQeR-qVkK7n9NlDIxR3_Cnf1ZE9jQMhtQixQrun9xGf3k&usqp=CAU" alt="" />
               <img className="w-full h-48"  src="https://i.pinimg.com/736x/d9/f8/6c/d9f86c727e36cb8f201bca7977db43d5.jpg" alt="" />
               <img className="w-full h-48"  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo%2C-hotel-logo-design-template-ebfa6df99afda30b485669e91d39c912_screen.jpg?ts=1667983519" alt="" />
            </Marquee>
        </div>
    );
};

export default Company;