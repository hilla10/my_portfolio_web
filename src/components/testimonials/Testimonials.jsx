import './Testimonials.css';

import testimonialsData from './testimonialData';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}>
        {testimonialsData.map(({ avatar, name, review, id }) => (
          <SwiperSlide className='testimonial' key={id}>
            <div className='clients__avatar'>
              <img src={avatar} alt={name} />
            </div>
            <h5 className='clients__name'>{name}</h5>
            <small className='clients__review'>{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
