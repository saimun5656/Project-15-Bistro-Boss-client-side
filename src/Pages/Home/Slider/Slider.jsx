import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Slider = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-5"
      >
        <SwiperSlide className="pb-12"><img src="/src/assets/home/slide1.jpg" alt="" />
        <p className="text-center uppercase text-3xl text-white -mt-20 py-5">salad</p>
        </SwiperSlide>
        <SwiperSlide className="pb-12"><img src="/src/assets/home/slide2.jpg" alt="" />
        <p className="text-center uppercase text-3xl text-white -mt-20 py-5">salad</p>
        </SwiperSlide>
        <SwiperSlide className="pb-12"><img src="/src/assets/home/slide3.jpg" alt="" />
        <p className="text-center uppercase text-3xl text-white -mt-20 py-5">salad</p>
        </SwiperSlide>
        <SwiperSlide className="pb-12"><img src="/src/assets/home/slide4.jpg" alt="" />
        <p className="text-center uppercase text-3xl text-white -mt-20 py-5">salad</p>
        </SwiperSlide>
        <SwiperSlide className="pb-12"><img src="/src/assets/home/slide5.jpg" alt="" />
        <p className="text-center uppercase text-3xl text-white -mt-20 py-5">salad</p>
        </SwiperSlide>
        <SwiperSlide className="pb-12"><img src="/src/assets/home/slide3.jpg" alt="" />
        <p className="text-center uppercase text-3xl text-white -mt-20 py-5">salad</p>
        </SwiperSlide>
        <SwiperSlide className="pb-12"><img src="/src/assets/home/slide4.jpg" alt="" />
        <p className="text-center uppercase text-3xl text-white -mt-20 py-5">salad</p>
        </SwiperSlide>
      </Swiper>
    );
};

export default Slider;