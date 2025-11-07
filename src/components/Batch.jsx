
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import arrowDown from "../assets/hero_banner/Arrow.gif";

const Batch = () => {
  const nextRef = useRef(null);

  const handleScroll = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const welcomeMessages = Array(8).fill("Welcome to");

  return (
    <>
      <section className="relative batch_sec bg-black py-10 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            1280: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            320: { slidesPerView: 1  },
          }}
          className="overflow-hidden"
        >
          {welcomeMessages.map((text, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <h3 className="text-[36px] md:text-[30px] sm:text-[22px] text-white font-semibold text-center whitespace-nowrap">
                {text} <span className="text-[#FF00EE]">BitSky</span>
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black px-20 arrow_div z-30">
          <img
            src={arrowDown}
            alt="scroll arrow"
            className="w-[50px] cursor-pointer transition-transform duration-200 hover:scale-110"
            onClick={handleScroll}
          />
        </div>
      </section>

      <div ref={nextRef}></div>
    </>
  );
};

export default Batch;



