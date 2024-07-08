import { Link } from "react-router-dom";
import VideoCard3 from "./VideoCard3";
import { ThinArrowIcon } from "../../Assets/Icons";
import { smoothScroll, checkScrollPosition } from "../../util/scrollCustom";
import { useState, useLayoutEffect, useRef, useEffect } from "react";

const CardRow2 = ({ data }) => {
  const rowRef = useRef();

  const [atStart, setAtStart] = useState(true);

  const [atEnd, setAtEnd] = useState(false);

  //   317 is card width 4 is margin right
  const handleScrollLeft = (e) => {
    if (rowRef.current) {
      let distance =
        (Math.floor(rowRef.current.clientWidth / (317 + 4)) + 1) * (317 + 4);
      smoothScroll("left", rowRef, 200, distance);
    }
  };
  const handleScrollRight = (e) => {
    if (rowRef.current) {
      let distance =
        (Math.floor(rowRef.current.clientWidth / (317 + 4)) + 1) * (317 + 4);
      smoothScroll("right", rowRef, 200, distance);
    }
  };

  useEffect(() => {
    const currentRef = rowRef.current;
    if (currentRef) {
      checkScrollPosition(rowRef, setAtStart, setAtEnd);
      currentRef.addEventListener("scroll", () =>
        checkScrollPosition(rowRef, setAtStart, setAtEnd)
      );
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", () =>
          checkScrollPosition(rowRef, setAtStart, setAtEnd)
        );
      }
    };
  }, []);

  return (
    <div className='border-b-[1px] border-black-0.2 w-full'>
      <div className='mt-[20px]'>
        <Link>
          <span className='text-[20px] leading-[28px] font-bold t-1-ellipsis'>
            {data?.title}
          </span>
        </Link>
      </div>
      <div className='pt-[12px] mb-[24px] relative'>
        <div
          className='whitespace-nowrap overflow-x-auto hidden-scorllbar'
          ref={rowRef}
        >
          {data?.list?.map((item, id) => (
            <VideoCard3
              containerStyle={"w-[317px] mr-[4px]"}
              data={item}
              key={id}
            />
          ))}
        </div>
        {!atEnd && (
          <button
            onClick={handleScrollRight}
            className={`sd3 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
           bg-[#212121]  z-[20] absolute right-0 translate-x-[40%] top-[50%]`}
          >
            <div className='hover:bg-[rgba(255,255,255,0.2)] w-full h-full flex items-center justify-center'>
              <ThinArrowIcon />
            </div>
          </button>
        )}
        {!atStart && (
          <button
            onClick={handleScrollLeft}
            className={`sd3 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
          bg-[#212121] z-[20] absolute left-0 translate-x-[-40%] top-[50%]`}
          >
            <div className='hover:bg-[rgba(255,255,255,0.2)] w-full h-full flex items-center justify-center rotate-[180deg]'>
              <ThinArrowIcon />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
export default CardRow2;
