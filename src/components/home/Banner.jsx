import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Banner = () => {
 

    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://png.pngtree.com/background/20210710/original/pngtree-food-overlooking-the-background-banner-picture-image_1055258.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center  text-neutral-content">
          <div className="max-w-lg">
         
            <h1 className="mb-5 text-3xl lg:text-5xl font-serif font-bold  text-orange-300">
            <Typewriter
  options={{
    strings: ['Welcome to our FoodiVerse','Welcome to the Food Universe'],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>
            <p className="mb-5 text-lg lg:text-2xl font-serif font-semibold text-slate-400">Nice environment with delicious and pure food items,Enjoy the different tasty food from our shop.</p>
            {/* <button className="btn btn-fill px-6 text-md lg:text-xl font-serif text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">Visit Us</button> */}
            <Link data-aos="zoom-in" data-aos-duration="2000" to="/about" className="btn btn-fill px-6 text-md lg:text-xl font-serif text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">Visit Us</Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;