import GamingCard from "./GamingCard";
import { smoothScroll, checkScrollPosition } from "../../util/scrollCustom";
import { IsEnd, IsTop } from "../../util/scrollPosition";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { ThinArrowIcon } from "../../Assets/Icons";

const GamingRow = ({ list, width, marginX }) => {
  const rowRef = useRef();

  const [atStart, setAtStart] = useState(true);

  const [atEnd, setAtEnd] = useState(false);

  const handleScrollLeft = (e) => {
    if (rowRef.current) {
      let distance =
        (Math.floor(rowRef.current.clientWidth / (210 + 4)) + 1) * (210 + 4);
      smoothScroll("left", rowRef, 200, distance);
    }
  };

  const handleScrollRight = (e) => {
    if (rowRef.current) {
      let distance =
        (Math.floor(rowRef.current.clientWidth / (210 + 4)) + 1) * (210 + 4);
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
    <div className='relative mt-[16px]'>
      {!atEnd && (
        <button
          onClick={handleScrollRight}
          className='sd3 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
           bg-[#212121]  z-[20] absolute right-0 translate-x-[40%] top-[34%]'
        >
          <div className='hover:bg-[rgba(255,255,255,0.2)] w-full h-full flex items-center justify-center'>
            <ThinArrowIcon />
          </div>
        </button>
      )}
      {!atStart && (
        <button
          onClick={handleScrollLeft}
          className='sd3 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
          bg-[#212121] z-[20] absolute left-0 translate-x-[-40%] top-[34%]'
        >
          <div className='hover:bg-[rgba(255,255,255,0.2)] w-full h-full flex items-center justify-center rotate-[180deg]'>
            <ThinArrowIcon />
          </div>
        </button>
      )}
      <div
        className='whitespace-nowrap overflow-x-auto hidden-scorllbar'
        ref={rowRef}
      >
        {!list
          ? "Cannot load data"
          : list.map((item, id) => (
              <GamingCard
                key={id}
                data={item}
                cStyle={`w-[${width}px] mx-[${marginX}px]`}
              />
            ))}
      </div>
    </div>
  );
};
export default GamingRow;
