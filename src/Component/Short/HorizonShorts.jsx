import {
  Short2Icon,
  Setting2Icon,
  FeedBackIcon,
  ThinArrowIcon,
} from "../../Assets/Icons";
import CustomeFuncBox from "../Box/CustomeFuncBox";
import { useState, useRef, useEffect } from "react";
import ShortCard from "./ShortCard";
import { smoothScroll, checkScrollPosition } from "../../util/scrollCustom";

const HorizonShorts = ({ shortList, funcBoxPos }) => {
  
  const containerRef = useRef();

  const rowRef = useRef();

  const [opened, setOpened] = useState(false);

  const [atStart, setAtStart] = useState(true);

  const [atEnd, setAtEnd] = useState(false);

  // 210 + 4 = short card witdth + margin width

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
    const handleClickoutSide = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpened(false);
      }
    };

    const currentRef = rowRef.current;

    if (currentRef) {
      checkScrollPosition(rowRef, setAtStart, setAtEnd);
      currentRef.addEventListener("scroll", () =>
        checkScrollPosition(rowRef, setAtStart, setAtEnd)
      );
    }

    window.addEventListener("mousedown", handleClickoutSide);

    return () => {
      window.removeEventListener("mousedown", handleClickoutSide);
      if (currentRef) {
        currentRef.removeEventListener("scroll", () =>
          checkScrollPosition(rowRef, setAtStart, setAtEnd)
        );
      }
    };
  }, []);

  return (
    <div>
      <div className='mt-[24px] flex items-center justify-between'>
        <div className='flex items-center gap-[8px]'>
          <div>
            <Short2Icon />
          </div>
          <span className='text-[20px] leading-[28px] font-bold'>Shorts</span>
        </div>

        <div className='relative' ref={containerRef}>
          <div
            className='size-[40px] rounded-[50%] active:bg-black-0.1 cursor-pointer 
            flex items-center justify-center '
            onClick={(e) => {
              e.stopPropagation();
              setOpened((prev) => !prev);
            }}
          >
            <Setting2Icon />
          </div>

          {opened && (
            <CustomeFuncBox
              funcList1={[
                {
                  id: 1,
                  text: "Gửi ý kiến phản hồi",
                  icon: <FeedBackIcon />,
                },
              ]}
              setOpened={setOpened}
              style={
                funcBoxPos ||
                "left-[100%] translate-x-[-100%] 2md:left-0 2md:translate-x-0"
              }
            />
          )}
        </div>
      </div>
      <div className='pt-[12px] pb-[24px] border-b-[1px] border-b-black-0.2 relative'>
        {!atEnd && (
          <button
            onClick={handleScrollRight}
            className='sd3 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
           bg-[#212121]  z-[20] absolute right-0 translate-x-[40%] top-[39%]'
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
          bg-[#212121] z-[20] absolute left-0 translate-x-[-40%] top-[39%]'
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
          {shortList.map((item) => (
            <ShortCard
              key={item.id}
              data={item}
              containerStyle={"w-[210px] !mb-0 !mr-[4px] !ml-0"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HorizonShorts;
