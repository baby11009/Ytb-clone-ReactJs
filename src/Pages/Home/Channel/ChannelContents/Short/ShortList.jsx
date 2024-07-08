import {
  tgb_s7,
  tgb_s8,
  tgb_s9,
  tgb_s10,
  tgb_s11,
  tgb_s12,
} from "../../../../../Assets/Images";
import { ShortCard } from "../../../../../Component";
import { useState, useLayoutEffect, useEffect, useRef } from "react";

const shortList = [
  {
    id: 1,
    title: "Sự kết hợp Thầy Ba và Thầy Quyền #shorts",
    img: tgb_s7,
    view: 9800,
  },
  {
    id: 2,
    title: "Mid số 1 BCS có khác 👏👏👏",
    img: tgb_s8,
    view: 22100,
  },
  {
    id: 3,
    title: "Chịu cách mình nói thua cover #short",
    img: tgb_s9,
    view: 15000,
  },
  {
    id: 4,
    title: "Bé ơi từ từ cover #short",
    img: tgb_s10,
    view: 8900,
  },
  {
    id: 5,
    title: "Buồn hay vui - MCK cover #short",
    img: tgb_s11,
    view: 9000,
  },
  {
    id: 6,
    title: "Thiên lý ơi cover #short",
    img: tgb_s12,
    view: 9700,
  },
];

const ShortsRow = ({ showQtt }) => {
  return (
    <div className='flex mx-[-8px]'>
      {shortList.slice(0, showQtt).map((item) => (
        <ShortCard
          key={item.id}
          data={item}
          containerStyle={"!mx-[2px] !mb-[20px]"}
        />
      ))}
    </div>
  );
};

const ShortList = ({ isEnd, isTop }) => {
  const containerRef = useRef();

  const [showQtt, setShowQtt] = useState(6);

  const [isLoading, setIsLoading] = useState(false);

  const [rows, setRows] = useState(3);

  const handleResize = () => {
    if (containerRef.current.offsetWidth > 1070 && containerRef.current) {
      setShowQtt(6);
    } else if (
      containerRef.current.offsetWidth === 1070 &&
      containerRef.current
    ) {
      setShowQtt(5);
    } else if (
      containerRef.current.offsetWidth === 856 &&
      containerRef.current
    ) {
      setShowQtt(4);
    } else if (
      containerRef.current.offsetWidth === 642 &&
      containerRef.current
    ) {
      setShowQtt(3);
    } else if (
      containerRef.current.offsetWidth === 428 &&
      containerRef.current
    ) {
      setShowQtt(2);
    } else setShowQtt(1);
  };

  useLayoutEffect(() => {
    // Function to update state with current window width
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let timeOut;

    if (isEnd) {
      setIsLoading(true);
      timeOut = setTimeout(() => {
        setRows((prev) => prev + 2);
        setIsLoading(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [isEnd]);

  useEffect(() => {
    if (isTop) {
      setRows(3);
    }
  }, [isTop]);
  return (
    <div ref={containerRef}>
      {[...Array(rows)].map((_, index) => (
        <ShortsRow showQtt={showQtt} key={index} />
      ))}
      {isLoading && (
        <div className='mt-[20px] mb-[40px] flex items-center justify-center'>
          <div
            className='w-[40px] h-[40px] rounded-[50px] border-[3px] border-[rgba(255,255,255,0.4)] 
        border-b-[transparent] border-l-[transparent] animate-spin'
          ></div>
        </div>
      )}
    </div>
  );
};
export default ShortList;
