import {
  iloda,
  zeros,
  levi,
  sangtraan,
  theanh,
  vuive,
  bauffs,
  asoken,
  llstylish,
} from "../../../../../Assets/Images";
import { formatNumber } from "../../../../../util/numberFormat";
import { ThinArrowIcon } from "../../../../../Assets/Icons";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  smoothScroll,
  checkScrollPosition,
} from "../../../../../util/scrollCustom";

const relativeData = [
  {
    id: 1,
    channelName: "iLoda",
    img: iloda,
    sub: 195000,
    isSub: true,
  },
  {
    id: 2,
    channelName: "zeros",
    img: zeros,
    sub: 154000,
    isSub: false,
  },
  {
    id: 3,
    channelName: "levi",
    img: levi,
    sub: 254000,
    isSub: true,
  },
  {
    id: 4,
    channelName: "sangtraan",
    img: sangtraan,
    sub: 450000,
    isSub: false,
  },
  {
    id: 5,
    channelName: "Thế Anh 96",
    img: theanh,
    sub: 182000,
    isSub: true,
  },
  {
    id: 6,
    channelName: "Vui vẻ",
    img: vuive,
    sub: 328000,
    isSub: false,
  },
  {
    id: 7,
    channelName: "Thebauffs",
    img: bauffs,
    sub: 480000,
    isSub: true,
  },
  {
    id: 8,
    channelName: "asoken",
    img: asoken,
    sub: 78200,
    isSub: false,
  },
  {
    id: 9,
    channelName: "ll stylish",
    img: llstylish,
    sub: 765000,
    isSub: true,
  },
];

const RelativeCard = ({ data }) => {
  return (
    <Link
      to={`/channel/${3}`}
      className='w-[210px] mr-[4px] inline-flex flex-col items-center justify-center'
    >
      <div className='flex flex-col items-center justify-center'>
        <img
          src={data.img}
          alt=''
          className='w-[103px] h-[103px] rounded-[50%] overflow-hidden'
        />
        <h5 className='my-[4px] text-[14px] leading-[20px] font-[500]'>
          {data.channelName}
        </h5>
        <p className='text-[12px] leading-[18px] text-gray-A'>
          {formatNumber(data.sub)} người đăng ký
        </p>
      </div>
      <div className='mt-[16px]'>
        <button className='px-[12px] text-[12px] leading-[32px] font-[500] rounded-[16px] bg-black-0.1 hover:bg-black-0.2'>
          {data.isSub ? "Đã đăng ký" : "Đăng ký"}
        </button>
      </div>
    </Link>
  );
};

const RelativeRow = () => {
  const rowRef = useRef();

  const [atStart, setAtStart] = useState(true);

  const [atEnd, setAtEnd] = useState(false);

  const handleScrollLeft = (e) => {
    if (rowRef.current) {
      let distance =
        (Math.floor(rowRef.current.clientWidth / (210 + 2 * 2)) + 1) *
        (210 + 2 * 2);
      smoothScroll("left", rowRef, 200, distance);
    }
  };
  
  const handleScrollRight = (e) => {
    if (rowRef.current) {
      let distance =
        (Math.floor(rowRef.current.clientWidth / (210 + 2 * 2)) + 1) *
        (210 + 2 * 2);
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
    <div>
      <div className='mt-[24px] flex items-center justify-between'>
        <h3 className='text-[20px] leading-[28px] font-bold text-white-F1'>
          CKG
        </h3>
        <button
          className='px-[16px] rounded-[18px] text-[14px] leading-[36px] text-[#0000EE] font-[500]
         hover:bg-[#263850]
          '
        >
          Xem tất cả
        </button>
      </div>

      <div className='mt-[24px] pt-[12px] mb-[24px] relative'>
        {!atEnd && (
          <button
            onClick={handleScrollRight}
            className={`sd3 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
           bg-[#212121]  z-[20] absolute right-0 translate-x-[40%] top-[25%]`}
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
          bg-[#212121] z-[20] absolute left-0 translate-x-[-40%] top-[25%]`}
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
          {relativeData.map((item) => (
            <RelativeCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RelativeRow;
