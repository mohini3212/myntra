import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// // import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

export const DealMen = () => {
    const images = [

        { "imgUrl": "/images/men-section2.jpeg" },
        { "imgUrl": "/images/men-section3.jpeg" },
        { "imgUrl": "/images/men-section4.jpeg" },
        { "imgUrl": "/images/men-section5.jpeg" },
        { "imgUrl": "/images/men-section6.jpeg" },
        { "imgUrl": "/images/men-section7.jpeg" },
        { "imgUrl": "/images/men-section8.jpeg" },
        { "imgUrl": "/images/men-section9.jpeg" },

    ];

    return (
        <div className="container1">
            <h2 className="margin-top">LUXE GRAND REDUCTION DEALS</h2>
            <Swiper
                spaceBetween={30}
                centeredSlides={false}
                slidesPerView={6}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"

                 breakpoints={{
                        1200: { slidesPerView: 6 },  // desktops
                        1024: { slidesPerView: 4 },  // tablets landscape
                        768: { slidesPerView: 3 },   // tablets portrait
                        576: { slidesPerView: 2 },   // big phones
                        480: { slidesPerView: 1 },     // small phones
                        360: { slidesPerView: 1 }, 
                    }}
            >

                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <NavLink to="/men">
                            <img src={item.imgUrl} alt="deal-img" />
                        </NavLink>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}