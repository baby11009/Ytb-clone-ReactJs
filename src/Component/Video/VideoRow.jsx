import { ThinArrowIcon } from "../../Assets/Icons";
import { useRef, useState, useEffect } from "react";
import { VideoCard } from "..";
import { smoothScroll, checkScrollPosition } from "../../util/scrollCustom";
import { vidList2 as mockList } from "../../Mock Data/videoData";

const VideoRow = ({
  vidList,
  containerStyle,
  showBtn,
  width,
  marginX,
  top,
  thumbRound,
}) => {
  const rowRef = useRef();

  const [atStart, setAtStart] = useState(true);

  const [atEnd, setAtEnd] = useState(false);

  const handleScrollLeft = (e) => {
    if (rowRef.current) {
      let distance =
        (Math.floor(rowRef.current.clientWidth / (width + marginX * 2)) + 1) *
        (width + marginX * 2);
      smoothScroll("left", rowRef, 200, distance);
    }
  };
  const handleScrollRight = (e) => {
    if (rowRef.current) {
      let distance =
        (Math.floor(rowRef.current.clientWidth / (width + marginX * 2)) + 1) *
        (width + marginX * 2);
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
    <div
      className={` relative ${containerStyle || "pt-[12px]"}`}
      style={{
        marginLeft: -marginX + "px",
      }}
    >
      {!atEnd && (
        <button
          onClick={handleScrollRight}
          className={`sd3 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
           bg-[#212121]  z-[20] absolute right-0 translate-x-[40%] ${top}`}
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
          bg-[#212121] z-[20] absolute left-0 translate-x-[-40%] ${top}`}
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
        {(vidList || mockList).map((item) => {
          if (item.type.title !== "playlist") {
            return (
              <VideoCard
                key={item.id}
                data={item}
                showBtn={showBtn}
                style={`inline-block mb-[24px]`}
                styleInline={{
                  width: width + "px",
                  marginLeft: marginX + "px",
                  marginRight: marginX + "px",
                }}
                thumbStyleInline={{
                  borderRadius: thumbRound,
                }}
                descStyle={"!hidden"}
                imgStyle={"hidden"}
                infoStyle={"text-[12px] leading-[18px]"}
                noFuncBox={true}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default VideoRow;
