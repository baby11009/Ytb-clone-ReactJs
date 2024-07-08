import { SmallShortCard } from "../../../../../Component";
import {
  tgb_s1,
  tgb_s2,
  tgb_s3,
  tgb_s4,
  tgb_s5,
  tgb_s6,
} from "../../../../../Assets/Images";
import { ThinArrowIcon } from "../../../../../Assets/Icons";
import { useRef, useState, useEffect } from "react";
import {
  checkScrollPosition,
  smoothScroll,
} from "../../../../../util/scrollCustom";

const channelData = {
  name: "Thầy giáo ba",
  verify: true,
};

const shortList = [
  {
    id: 1,
    title: "Mid số 1 BCS có khác 👏👏👏",
    thumb: tgb_s1,
    channel: channelData,
    view: 22500,
    time: "25/4/2024, 20:23:50 AM",
    duration: 39,
  },
  {
    id: 2,
    title: "SofM bị Thầy Giáo Ba đọc như 1 cuốn sách #shorts",
    thumb: tgb_s2,
    channel: channelData,
    view: 62,
    time: "18/12/2023, 20:23:50 AM",
    duration: 56,
  },
  {
    id: 3,
    title: "Đúng gu là sẵn sàng liền #shorts",
    thumb: tgb_s3,
    channel: channelData,
    view: 16200,
    time: "25/11/2023, 20:23:50 AM",
    duration: 59,
  },
  {
    id: 4,
    title: "Trứng rán cần mỡ~~~ #shorts",
    thumb: tgb_s4,
    channel: channelData,
    view: 22671,
    time: "21/11/2023, 20:23:50 PM",
    duration: 18,
  },
  {
    id: 5,
    title: "Thử thách nhìn icons đoán tướng #shorts",
    thumb: tgb_s5,
    channel: channelData,
    view: 38325,
    time: "11/11/2023, 20:23:50 PM",
    duration: 50,
  },
  {
    id: 6,
    title: "Thầy quẩy ác #shorts",
    thumb: tgb_s6,
    channel: channelData,
    view: 17325,
    time: "11/11/2023, 20:23:50 PM",
    duration: 51,
  },
  {
    id: 11,
    title: "Mid số 1 BCS có khác 👏👏👏",
    thumb: tgb_s1,
    channel: channelData,
    view: 22500,
    time: "25/4/2024, 20:23:50 AM",
    duration: 39,
  },
  {
    id: 12,
    title: "SofM bị Thầy Giáo Ba đọc như 1 cuốn sách #shorts",
    thumb: tgb_s2,
    channel: channelData,
    view: 62,
    time: "18/12/2023, 20:23:50 AM",
    duration: 56,
  },
  {
    id: 13,
    title: "Đúng gu là sẵn sàng liền #shorts",
    thumb: tgb_s3,
    channel: channelData,
    view: 16200,
    time: "25/11/2023, 20:23:50 AM",
    duration: 59,
  },
  {
    id: 14,
    title: "Trứng rán cần mỡ~~~ #shorts",
    thumb: tgb_s4,
    channel: channelData,
    view: 22671,
    time: "21/11/2023, 20:23:50 PM",
    duration: 18,
  },
  {
    id: 15,
    title: "Thử thách nhìn icons đoán tướng #shorts",
    thumb: tgb_s5,
    channel: channelData,
    view: 38325,
    time: "11/11/2023, 20:23:50 PM",
    duration: 50,
  },
  {
    id: 16,
    title: "Thầy quẩy ác #shorts",
    thumb: tgb_s6,
    channel: channelData,
    view: 17325,
    time: "11/11/2023, 20:23:50 PM",
    duration: 51,
  },
];

const ShortVidsRow = ({ width, marginX, top }) => {
  const containerRef = useRef();

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
    checkScrollPosition(rowRef, setAtStart, setAtEnd);

    const currentRef = rowRef.current;
    if (currentRef) {
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
      style={{
        marginLeft: -marginX + "px",
      }}
      className='pb-[50px] relative'
    >
      {!atEnd && (
        <button
          onClick={handleScrollRight}
          className={`sd3 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
           bg-[#212121]  z-[30] absolute right-0 translate-x-[40%] ${top}`}
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
          bg-[#212121] z-[30] absolute left-0 translate-x-[-40%] ${top}`}
        >
          <div className='hover:bg-[rgba(255,255,255,0.2)] w-full h-full flex items-center justify-center rotate-[180deg]'>
            <ThinArrowIcon />
          </div>
        </button>
      )}
      <div ref={containerRef}>
        <div
          className='whitespace-nowrap overflow-x-auto hidden-scorllbar'
          ref={rowRef}
        >
          {shortList.map((item) => (
            <SmallShortCard
              data={item}
              key={item.id}
              style={{
                display: "inline-block",
                width: width + "px",
                marginLeft: marginX + "px",
                marginRight: marginX + "px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShortVidsRow;
