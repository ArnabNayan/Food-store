import image from '../../public/3.png'
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import image1 from '../../public/4.png'
import image2 from '../../public/5.png'
const AboutUs = () => {
  const data = {
    organicPlanting: 500,
    passionateChefs: 30,
    favoriteDishes: 100,
};
    return (
        <div>
           <div className="hero min-h-screen" style={{backgroundImage: 'url(https://t4.ftcdn.net/jpg/01/27/16/25/360_F_127162573_kcES41FWV2OOdI5GxdD4di6l4O8o0AZb.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center  text-neutral-content">
          <div className="max-w-lg bg-slate-600 bg-opacity-50 p-5 lg:p-10 m-5">
         
            <h1 className="mb-5 text-2xl lg:text-4xl font-serif font-bold  text-orange-300">
            {/* <Typewriter
  options={{
    strings: ['Feel free to Contact Us','Feel free to message Us'],
    autoStart: true,
    loop: true,
  }}
/> */}     Know About Us
            </h1>
            <p className="mb-5 text-lg lg:text-2xl font-serif font-semibold text-slate-400">Always ready for your service,we try to deliver food as soon as possible</p>
           
          </div>  
          </div>
          </div>
          <div  className=" flex flex-col items-center justify-center bg-gray-100 p-6">
         
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
            {/* Left Column with Text */}
            <div data-aos="fade-right" data-aos-duration="2000" className="w-full lg:w-1/2 text-right lg:pr-10 mb-6 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-amber-600 mb-4">Welcome to Foodiverse</h2>
              <p className="text-gray-700 text-lg">
                At Foodiverse, we believe that food is not just a necessity but an experience. 
                Our journey started with a passion for creating a unique dining experience that
                combines the finest ingredients, world-class culinary skills, and a cozy atmosphere.
              </p>
              <p className="mt-4 text-gray-700 text-lg">
                We are committed to serving our guests with the best quality food, made with love
                and care. Our chefs are experts in crafting dishes that are not only delicious but
                also a feast for the eyes. Whether you are here for a quick bite or a full-course meal,
                Foodiverse offers something for everyone.
              </p>
            </div>
    
            {/* Center Image */}
            <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
              <img data-aos="fade-down" data-aos-duration="2000"
                src={image} // Replace with the actual image URL
                alt="Foodiverse Restaurant"
                className="rounded-lg shadow-lg lg:h-96 h-64"
              />
            </div>
    
            {/* Right Column with Text */}
            <div className="w-full lg:w-1/2 text-left lg:pl-10">
              <p data-aos="fade-left" data-aos-duration="2000"className="text-gray-700 text-lg">
                Our menu is a reflection of our commitment to variety and excellence. We offer a wide 
                range of dishes from different cuisines, ensuring that there is something to satisfy 
                every palate. From the freshest salads to the most indulgent desserts, every dish is 
                prepared with the utmost attention to detail.
              </p>
              <p data-aos="fade-left" data-aos-duration="2000" className="mt-4 text-gray-700 text-lg">
                Foodiverse is more than just a restaurant; it is a place where memories are made. 
                Whether you are celebrating a special occasion or simply enjoying a meal with 
                loved ones, we strive to make every moment memorable. Join us and be part of the 
                Foodiverse family.
              </p>
            </div>
          </div>
        </div>
    <section className="bg-slate-100 py-6">
           <div className="container mx-auto px-4">
               <div className="text-center mb-12">
                   <h2 data-aos="fade-up" data-aos-duration="2000" className="text-4xl font-bold mb-4">WE PROVIDE BEST QUALITY FOOD FOR YOUR HEALTH</h2>
                   <p data-aos="fade-up" data-aos-duration="2000" className="text-lg text-gray-600">
                       Welcome to our restaurant, where culinary excellence meets warm hospitality in every dish we serve. 
                       Nestled in the heart of City Name, our eatery invites you on a journey.
                   </p>
                 <Link to="/contact">  <button data-aos="fade-up" data-aos-duration="2000" className="mt-6 px-8 py-3 bg-amber-500 text-white rounded hover:bg-orange-600 font-serif">
                       Contact Us
                   </button></Link>
               </div>
               <div data-aos="fade-up" data-aos-duration="2000" className="flex justify-around items-center  text-amber-600 p-2  font-serif font-semibold">
                   <div className="text-center">
                       <h3 className="text-3xl font-bold">
                           <CountUp end={data.organicPlanting} duration={2.5}>
                               {({ countUpRef, start }) => (
                                  
                                  
                                   <VisibilitySensor onChange={start} delayedCall>
                                       <span ref={countUpRef} />
                                   </VisibilitySensor>
                               )}
                           </CountUp>+
                       </h3>
                       <p className="text-lg">Organic Planting</p>
                   </div>
                   <div data-aos="fade-up" data-aos-duration="2000" className="text-center">
                       <h3 className="text-3xl font-bold">
                           <CountUp end={data.passionateChefs} duration={2.5}>
                               {({ countUpRef, start }) => (
                                   // eslint-disable-next-line react/jsx-no-undef
                                   <VisibilitySensor onChange={start} delayedCall>
                                       <span ref={countUpRef} />
                                   </VisibilitySensor>
                               )}
                           </CountUp>+
                       </h3>
                       <p className="text-lg">Passionate Chefs</p>
                   </div>
                   <div data-aos="fade-up" data-aos-duration="2000" className="text-center">
                       <h3 className="text-3xl font-bold">
                           <CountUp end={data.favoriteDishes} duration={2.5}>
                               {({ countUpRef, start }) => (
                                   // eslint-disable-next-line react/jsx-no-undef
                                   <VisibilitySensor onChange={start} delayedCall>
                                       <span ref={countUpRef} />
                                   </VisibilitySensor>
                               )}
                           </CountUp>+
                       </h3>
                       <p className="text-lg">Favourite Dishes</p>
                   </div>
               </div>
               <div data-aos="fade-up" data-aos-duration="2000" className="flex justify-center items-center mt-10">
                   <img
                       src={image1}
                       alt="Chef 1"
                       className="w-48 h-48 object-cover rounded-full shadow-lg mx-4"
                   />
                   <img
                       src={image2}
                       alt="Chef 2"
                       className="w-48 h-48 object-cover rounded-full shadow-lg mx-4"
                   />
               </div>
           </div>
       </section>
        </div>
    );
};

export default AboutUs;