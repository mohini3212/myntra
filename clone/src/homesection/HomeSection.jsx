import { Deal } from '../frontpages/Deal';
import { Brands } from '../frontpages/Brands';
import { Categories } from '../frontpages/Categories';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export const HomeSection = () => {
    return (
        <>
            {/* hero-section */}
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
                <SwiperSlide><img src="images/home.jpg" alt="hero-section1" /></SwiperSlide>
                <SwiperSlide><img src="images/home.jpg" alt="hero-section2" /></SwiperSlide>
                <SwiperSlide><img src="images/home.jpg" alt="hero-section3" /></SwiperSlide>
                <SwiperSlide><img src="images/home.jpg" alt="hero-section4" /></SwiperSlide>

            </Swiper>
            {/* <HeroSection/> */}
            <Deal />
            <Brands />
            <Categories />
        </>
    )
}