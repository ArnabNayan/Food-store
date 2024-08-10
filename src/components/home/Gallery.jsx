import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Gallery = () => {
    
    return (
        <>
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center text-2xl lg:text-4xl text-amber-500 mt-5 font-serif font-bold">
                ------Our Food Gallery------
            </h1>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-5 bg-slate-200"
        data-aos="fade-up" data-aos-duration="2000"
      >
        <SwiperSlide>
          <img className='mb-8 transform transition-transform duration-300 hover:scale-110' src="https://img.freepik.com/premium-photo/tasty-burger-restaurant-isolated-blur-background-generated-by-ai_751264-550.jpg" alt="" />
          <h1 className="uppercase text-center -mt-16 text-white font-serif font-bold text-sm lg:text-2xl">Burger</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='mb-8 transform transition-transform duration-300 hover:scale-110' src="https://web-assets.limewire.media/u/1f65cba7-6523-402f-943d-ce61ebb19f3f/38402da7-4b7c-49f1-ad55-8aaae99f2dee.d/post_image_large.jpeg" alt="" />
          <h1 className="uppercase text-sm lg:text-2xl text-center -mt-16 text-white font-serif">Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='mb-8 transform transition-transform duration-300 hover:scale-110' src="https://www.foodiesfeed.com/wp-content/uploads/2023/04/fresh-fruit-salad-with-mint.jpg" alt="" />
          <h1 className="uppercase text-center text-sm lg:text-2xl -mt-16 text-white font-serif">Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='mb-8 transform transition-transform duration-300 hover:scale-110' src="https://thebusybaker.ca/wp-content/uploads/2019/10/best-ever-christmas-punch-fb-ig-4.jpg" alt="" />
          <h1 className="uppercase text-sm lg:text-2xl text-center -mt-16 text-white font-serif">Drinks</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='mb-8 transform transition-transform duration-300 hover:scale-110' src="https://static.vecteezy.com/system/resources/previews/026/971/084/non_2x/biryani-or-biryani-is-a-popular-indian-dish-made-of-basmati-rice-cooked-with-spices-and-vegetables-free-photo.jpg" alt="" />
          <h1 className="uppercase text-sm lg:text-2xl text-center -mt-16 text-white font-serif">Biriyani</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='mb-8 transform transition-transform duration-300 hover:scale-110' src="https://static.toiimg.com/photo/75455420.cms" alt="" />
          <h1 className="uppercase text-sm lg:text-2xl text-center -mt-16 text-white font-serif">Chowmein</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='mb-8 transform transition-transform duration-300 hover:scale-110' src="https://img.freepik.com/premium-photo/photo-chocolate-cake-with-chocolate-nuts-top_1025753-3140.jpg" alt="" />
          <h1 className="uppercase text-sm lg:text-2xl text-center -mt-16 text-white font-serif">Chocolate</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='mb-8 transform transition-transform duration-300 hover:scale-110' src="https://flawlessfood.co.uk/wp-content/uploads/2022/04/Prawn-pad-thai-noodles-4.jpg" alt="" />
          <h1 className="uppercase text-sm lg:text-2xl text-center -mt-16 text-white font-serif">Pad Thai</h1>
        </SwiperSlide>
      </Swiper>
        </>
    );
};

export default Gallery;
