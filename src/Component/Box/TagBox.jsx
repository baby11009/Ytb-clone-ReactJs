import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { ThinArrowIcon } from "../../Assets/Icons";

const TagCard = ({ data, activeIndex, setActiveIndex }) => {
  return (
    <div
      className={`px-[12px] rounded-[8px] ${
        data.id === activeIndex
          ? "bg-white-F1 hover:bg-white text-black"
          : " bg-black-0.1 hover:bg-black-0.2 "
      }`}
      onClick={() => setActiveIndex(data.id)}
    >
      {data.title}
    </div>
  );
};

const TagBox = ({ tagList, activeIndex, setActiveIndex, responsiveBtn }) => {
  const swiperRef = useRef();

  const [onReached, setOnReached] = useState("begin");

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className='relative w-full'>
      <Swiper
        className='flex !mx-0 w-full text-[14px] leading-[32px] font-[500]'
        slidesPerView={"auto"}
        spaceBetween={12}
        resistanceRatio={0.5}
        onSwiper={(swiper) => {
          swiperRef.current = { swiper };
        }}
        onReachBeginning={() => setOnReached("begin")}
        onReachEnd={() => setOnReached("end")}
        onFromEdge={() => setOnReached("")}
      >
        {tagList.map((item) => (
          <SwiperSlide key={item.id} className='!w-fit cursor-pointer'>
            <TagCard
              data={item}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {onReached !== "begin" && (
        <button
          onClick={handlePrev}
          className={`absolute left-0 top-[50%] translate-y-[-50%] 
      bg-black flex z-[210] sd1 ${responsiveBtn || "sm:hidden"}`}
        >
          <div className='w-[40px] h-[40px] rounded-[50%] hover:bg-[rgba(255,255,255,0.2)] mx-[8px] my-[8px] flex justify-center items-center rotate-180'>
            <ThinArrowIcon />
          </div>
        </button>
      )}
      {onReached !== "end" && (
        <button
          onClick={handleNext}
          className={`absolute right-0 top-[50%] translate-y-[-50%] 
      bg-black flex z-[10] sd2 ${responsiveBtn || "sm:hidden"}`}
        >
          <div className='w-[40px] h-[40px] rounded-[50%] hover:bg-[rgba(255,255,255,0.2)] mx-[8px] my-[8px] flex justify-center items-center'>
            <ThinArrowIcon />
          </div>
        </button>
      )}
    </div>
  );
};
export default TagBox;
