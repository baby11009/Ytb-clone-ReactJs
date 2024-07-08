import {
  v1_iloda,
  v1_sangtraan,
  v1_tgb,
  v1_theanh,
} from "../../../../../Assets/Images";
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import { VideoCard } from "../../../../../Component";
import { vidList2 as mockList } from "../../../../../Mock Data/videoData";

const VideosRow = ({ showQtt }) => {
  return (
    <div className='flex mx-[-8px]'>
      {mockList.slice(0, showQtt).map((item) => {
        if (item.type.title !== "playlist")
          return (
            <VideoCard
              data={item}
              key={item.id}
              showBtn={true}
              style={`inline-block flex-1 mx-[8px] mb-[40px]`}
              thumbStyleInline={{
                borderRadius: "12px",
              }}
              descStyle={'!hidden'}
              titleStyle={"text-[14px] leading-[20px] font-[500] max-h-[40px]"}
              noFuncBox={true}
            />
          );
      })}
    </div>
  );
};

const VideoList = ({ isEnd, isTop }) => {
  const containerRef = useRef();

  const [showQtt, setShowQtt] = useState(4);

  const [isLoading, setIsLoading] = useState(false);

  const [rows, setRows] = useState(3);

  const handleResize = () => {
    if (containerRef.current.offsetWidth >= 1070 && containerRef.current) {
      setShowQtt(4);
    } else if (
      containerRef.current.offsetWidth === 856 &&
      containerRef.current
    ) {
      setShowQtt(3);
    } else if (
      containerRef.current.offsetWidth === 642 &&
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
    <div className='w-full' ref={containerRef}>
      {[...Array(rows)].map((_, index) => (
        <VideosRow showQtt={showQtt} key={index} />
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
export default VideoList;
