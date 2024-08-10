import Marquee from "react-fast-marquee";

const TopFood = () => {
    return (
        <div className="mt-5">
        <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center text-2xl lg:text-4xl text-amber-500 mt-5 font-serif font-bold">
            ------Our Top Sell------
        </h1>
         <Marquee data-aos="fade-up" data-aos-duration="2000" className="bg-slate-100 p-5 mt-2">
           <img className="w-full h-60 lg:h-80 "  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7Rw0GbjnFXXdTUaKLt1W8B2NwTo9tgG50QSZD2DLysrg5BxmX4E4ieDU8q9KD5DPHY8&usqp=CAU" alt="" />
           <img className="w-full h-60 lg:h-80 "  src="https://images.deliveryhero.io/image/fd-pk/LH/v7vk-hero.jpg?width=300&height=300&quality=45" alt="" />
           <img className="w-full h-60 lg:h-80 "  src="https://www.196flavors.com/wp-content/uploads/2016/01/moussaka-4-FP.jpg" alt="" />
           <img className="w-full h-60 lg:h-80 "  src="https://media.istockphoto.com/id/1438695634/photo/paella-ready-to-eat.webp?b=1&s=170667a&w=0&k=20&c=6UP3aalpSVJDT7oNl-TYZ_pxCuP0m3rKJCWkqSTv684=" alt="" />
           <img className="w-full h-60 lg:h-80 "  src="https://static.vecteezy.com/system/resources/thumbnails/030/683/548/small_2x/burgers-high-quality-4k-hdr-free-photo.jpg" alt="" />
           <img className="w-full h-60 lg:h-80 "  src="https://t4.ftcdn.net/jpg/05/51/07/25/360_F_551072558_rENux9fqlec5GPBJSaToT69xjcYiGxje.jpg" alt="" />
           <img className="w-full h-60 lg:h-80 "  src="https://cdn.create.vista.com/api/media/small/687598764/stock-photo-pizza-fresh-vegetables" alt="" />
        </Marquee>
    </div>
    );
};

export default TopFood;