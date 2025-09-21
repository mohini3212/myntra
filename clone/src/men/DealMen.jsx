// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';




// // import required modules
// import { Autoplay, Pagination } from 'swiper/modules';

// export const DealMen = () => {
//     return (
//         <>
//             <div className="container1">
//                 <h2 className="margin-top" >LUXE GRAND REDUCTION DEALS</h2>
//                 <Swiper

//                     spaceBetween={30}
//                     centeredSlides={false}
//                     slidesPerView={6}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{
//                         clickable: true,
//                     }}

//                     modules={[Autoplay, Pagination,]}
//                     className="mySwiper"
//                 >

//                     <SwiperSlide><img src="/public/images/men-section2.jpeg" alt="deals-img" /></SwiperSlide>
//                     <SwiperSlide><img src="/public/images/men-section3.jpeg" alt="deals-img" /></SwiperSlide>
//                     <SwiperSlide><img src="/public/images/men-section4.jpeg" alt="deals-img" /></SwiperSlide>
//                     <SwiperSlide><img src="/public/images/men-section5.jpeg" alt="deals-img" /></SwiperSlide>
//                     <SwiperSlide><img src="/public/images/men-section6.jpeg" alt="deals-img" /></SwiperSlide>
//                     <SwiperSlide><img src="/public/images/men-section7.jpeg" alt="deals-img" /></SwiperSlide>
//                     <SwiperSlide><img src="/public/images/men-section8.jpeg" alt="deals-img" /></SwiperSlide>
//                     <SwiperSlide><img src="/public/images/men-section9.jpeg" alt="deals-img" /></SwiperSlide>


//                 </Swiper>
//             </div>
//         </>
//     );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import { NavLink } from "react-router-dom";

// export const DealWomen = () => {
//   const images = [

//     { "imgUrl": "/images/women-section5.jpeg" },
//     { "imgUrl": "/images/women-section6.jpeg" },
//     { "imgUrl": "/images/women-section7.jpeg" },
//     { "imgUrl": "/images/women-section8.jpeg" },
//     { "imgUrl": "/images/women-section9.jpeg" },
//     { "imgUrl": "/images/women-section10.jpeg" },
//     { "imgUrl": "/images/women-section11.jpeg" },
//     { "imgUrl": "/images/women-section12.jpeg" },
//     { "imgUrl": "/images/women-section13.jpeg" },
//     { "imgUrl": "/images/women-section14.jpeg" },
//     { "imgUrl": "/images/women-section15.jpeg" },
//     { "imgUrl": "/images/women-section16.jpeg" },

//   ];

//   return (
//     <div className="container1">
//       <h2 className="margin-top">LUXE GRAND REDUCTION DEALS</h2>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={false}
//         slidesPerView={6}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Autoplay, Pagination]}
//         className="mySwiper"
//       >

//         {images.map((item, index) => (
//           <SwiperSlide key={index}>
//             <NavLink to="/women">
//               <img src={item.imgUrl} alt="deal-img" />
//             </NavLink>
//           </SwiperSlide>
//         ))}

//       </Swiper>
//     </div>
//   );
// };

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