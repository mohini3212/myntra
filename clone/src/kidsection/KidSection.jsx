import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { Deal } from '../frontpages/Deal';
import { Brands } from '../frontpages/Brands';
import { Categories } from '../frontpages/Categories';

export const KidSection = () => {
    return (
        <>
        {/* hero-section  start*/}
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
                <SwiperSlide><img src="images/kidsHero-section  (1).jpg" alt="hero-section1" /></SwiperSlide>
                <SwiperSlide><img src="images/kidsHero-section  (2).jpg" alt="hero-section2" /></SwiperSlide>
                <SwiperSlide><img src="images/men-herosection3.jpg" alt="hero-section3" /></SwiperSlide>
                <SwiperSlide><img src="images/men-herosection4.jpg" alt="hero-section4" /></SwiperSlide>

            </Swiper>
            {/* hero-section  end*/}
            <Deal />
            <Brands />
            <Categories />
        </>


    );
}