import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useEffect, useState } from 'react';


import StarRating from '../StarRating';




const Customer = () => {
 const axiosPublic=useAxiosPublic()
 const [reviews, setReviews] = useState([]);

 useEffect(() => {
   const fetchReviews = async () => {
     try {
       const response = await axiosPublic.get("/reviews");
       setReviews(response.data);
     } catch (error) {
       console.error("Error fetching reviews:", error);
     }
   };
   fetchReviews();
 }, [axiosPublic]);

    return (
        <div className="mt-5">
            <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-center text-2xl lg:text-4xl text-amber-500 font-serif font-bold">
                ------Our Happy Customers------
            </h1>
            <div className="mt-2 bg-slate-100 p-5 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="p-4 flex flex-col items-center">
             
                <h3 data-aos="fade-up" data-aos-duration="2000" className="text-xl lg:text-3xl font-serif font-bold">{review.name}</h3>
                <p data-aos="fade-up" data-aos-duration="2000" className='text-lg lg:text-xl font-serif '>{review.foodFeedback}</p>
                <p data-aos="fade-up" data-aos-duration="2000" className='text-lg lg:text-xl font-serif'>{review.comment}</p>
                <p data-aos="fade-up" data-aos-duration="2000" className="font-serif text-md lg:text-lg mb-2"><StarRating rating={review.rating} /></p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
        </div>
    );
};

export default Customer;