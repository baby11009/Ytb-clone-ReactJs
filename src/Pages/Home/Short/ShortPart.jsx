import LargeShortVid from "./LargeShortVid";
import { LongArrowIcon } from "../../../Assets/Icons";
import { useLayoutEffect, useState } from "react";
import { IsEnd, IsTop } from "../../../util/scrollPosition";

const ShortPart = () => {
  const [isTop, setIsTop] = useState(true);

  const [isEnd, setIsEnd] = useState(false);

  const handleScrollPrev = () => {
    window.scrollTo({
      left: window.scrollX,
      top: window.scrollY - 612,
      behavior: "smooth",
    });
  };

  const handleScrollNext = () => {
    window.scrollTo({
      left: window.scrollX,
      top: window.scrollY + 612,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    const disableScroll = (e) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", disableScroll, { passive: false });

    window.addEventListener("scroll", () => {
      IsEnd(setIsEnd);
      IsTop(setIsTop);
    });
    console.log("initial");

    document.documentElement.style.setProperty("--scroll-bar-width", "none");

    return () => {
      console.log("remove");

      window.removeEventListener("wheel", disableScroll, { passive: false });

      window.removeEventListener("scroll", () => {
        IsEnd(setIsEnd);
        IsTop(setIsTop);
      });

      document.documentElement.style.setProperty("--scroll-bar-width", "auto");
    };
  }, []);

  return (
    <div className='relative'>
      <div className='mx-auto w-fit pb-[48px]'>
        <LargeShortVid />
        <LargeShortVid />
        <LargeShortVid />
        <LargeShortVid />
        <LargeShortVid />
      </div>
      <div className='hidden md:flex md:flex-col fixed top-[50%] translate-y-[-50%] right-0'>
        {!isTop && (
          <div className='px-[24px] py-[8px]'>
            <button
              className='w-[56px] h-[56px] rounded-[50%] bg-hover-black
           hover:bg-[rgba(255,255,255,0.2)] rotate-180 flex items-center justify-center'
              title='Video trước'
              onClick={handleScrollPrev}
            >
              <LongArrowIcon />
            </button>
          </div>
        )}
        {!isEnd && (
          <div className='px-[24px] py-[8px]'>
            <button
              className='w-[56px] h-[56px] rounded-[50%] bg-hover-black
             hover:bg-[rgba(255,255,255,0.2)] flex items-center justify-center'
              title='Video tiếp theo'
              onClick={handleScrollNext}
            >
              <LongArrowIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShortPart;
