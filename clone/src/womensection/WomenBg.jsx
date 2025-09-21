import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
export const WomenBg=()=>{
    return(
       <>
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

                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="images/women-herosection1.jpg" alt="hero-section1" /></SwiperSlide>
                <SwiperSlide><img src="images/women-herosection2.jpg" alt="hero-section2" /></SwiperSlide>
                <SwiperSlide><img src="images/women-herosection3.jpg" alt="hero-section3" /></SwiperSlide>
                <SwiperSlide><img src="images/women-herosection4.jpg" alt="hero-section4" /></SwiperSlide>
                <SwiperSlide><img src="images/women-herosection5.jpg" alt="hero-section5" /></SwiperSlide>

            </Swiper>
        </>  
    )
}