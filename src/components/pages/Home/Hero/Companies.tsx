'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
// import 'swiper/swiper-bundle.min.css';

// Optional Swiper modules
import {  Autoplay } from 'swiper/modules';

const Companies = () => {
  const images = [
    { alt: 'bi_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/bi_logo.webp' },
    { alt: 'entrepreneur_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/entrepreneur_logo.webp' },
    { alt: 'vf_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/vf_logo-1.webp' },
    { alt: 'ferriss_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/ferriss_logo.webp' },
    { alt: 'slashdot_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/slashdot_logo.webp' },
    { alt: 'tnw_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/tnw_logo.webp' },
    { alt: 'yahoo_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/yahoo_logo.webp' },
    { alt: 'inc_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/inc_logo.webp' },
    { alt: 'forbes_logo', src: 'https://wisdomshelf.com/wp-content/uploads/2024/04/forbes_logo.webp' },
  ];

  return (
    <Swiper
      modules={[  Autoplay]}
      spaceBetween={40}
      slidesPerView={6}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
     
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <figure>
            <img src={image.src} alt={image.alt} />
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Companies;
