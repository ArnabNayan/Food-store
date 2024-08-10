import { Link } from 'react-router-dom';
import image5 from '../../../public/offerProduct.png'
import Countdowns from '../Countdown';

const Offer = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col md:flex-row md:justify-between h-screen bg-black md:bg-[url("/offerBg.png")]  md:h-[70vh]'>
            <div  className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 data-aos="fade-right" data-aos-duration="2000" className="text-white text-5xl font-serif font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p data-aos="fade-right" data-aos-duration="2000" className="text-white font-serif xl:text-xl">
         This is a new additional special spicy and tasty food with limited time,Offer closes soon,so quickly make your decision.
        </p>
        <Countdowns data-aos="zoom-in" data-aos-duration="2000"/>
        <Link data-aos="zoom-in" data-aos-duration="2000" to="/contact" className="bg-amber-500 text-white font-serif rounded-md py-3 px-6">Visit Now</Link>

      </div>
     
      <div  className="flex-1 w-full relative md:h-full">
        <img data-aos="fade-left" data-aos-duration="2000" src={image5} alt=""  className="object-contain mt-10" />
      </div>
    </div>

    );
};

export default Offer;