import ShortVids from "../Short/ShortVids";
import VideoCard from "../Video/VideoCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThickGridIcon, EmptyGridIcon, ListIcon } from "../../Assets/Icons";
import { IsEnd, IsTop } from "../../util/scrollPosition";

const HorizonCard = ({ data, layout, setLayout, showBtn }) => {
  return (
    <div className='pb-[24px] border-b-[1px] border-black-0.2'>
      <div className='my-[14px] flex justify-between'>
        <Link to={`/channel/${data.id}`} className='flex items-center'>
          <div className='size-[32px] rounded-[50%] overflow-hidden mr-[8px]'>
            <img src={data.channel?.img} alt='channel image' />
          </div>
          <div>
            <span className='text-[20px] leading-[28px] font-bold'>
              {data.channel?.name}
            </span>
          </div>
        </Link>
        {showBtn && (
          <div className='flex items-center'>
            <Link
              className='px-[16px] rounded-[18px] hover:bg-[#263850] cursor-pointer'
              to={`/sub-channels`}
            >
              <span className=' text-nowrap text-[14px] leading-[36px] font-[500] text-blue-3E'>
                Quản lý
              </span>
            </Link>

            <div
              className='w-[40px] h-[40px] rounded-[50%] hover:bg-black-0.2 flex items-center justify-center cursor-pointer'
              onClick={() => setLayout("grid")}
            >
              {layout === "grid" ? <ThickGridIcon /> : <EmptyGridIcon />}
            </div>
            <div
              className='w-[40px] h-[40px] rounded-[50%] hover:bg-black-0.2 flex items-center justify-center cursor-pointer'
              onClick={() => setLayout("list")}
            >
              <ListIcon />
            </div>
          </div>
        )}
      </div>
      <div className='w-full max-w-[862px]'>
        <VideoCard
          data={data}
          noFunc2={true}
          showLive={data.type.title === "live"}
          style={"flex gap-[16px] mx-0 mb-0"}
          thumbStyle={"w-[246px] h-[138px] mb-0 rounded-[8px]"}
          titleStyle={"text-[18px] leading-[26px] font-[400] max-h-[56px]"}
          infoStyle={"flex text-[12px] leading-[18px]"}
          imgStyle={"hidden"}
          liveStyle={"hidden"}
        />
      </div>
    </div>
  );
};

const ListLayout = ({ openedMenu, vidList, shortList, layout, setLayout }) => {
  const shortResponse = `grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2lg:grid-cols-5 5xl:grid-cols-9
  ${
    openedMenu
      ? "1-5xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7"
      : "1-5xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-9"
  }`;

  const [showQtt, setShowQtt] = useState(1);

  const [isEnd, setIsEnd] = useState(false);

  const [isTop, setIsTop] = useState(true);

  const handleResizeShort = () => {
    if (window.innerWidth < 426) {
      setShowQtt(1);
    } else if (window.innerWidth < 640) {
      setShowQtt(2);
    } else if (window.innerWidth < 1024) {
      setShowQtt(3);
    } else if (window.innerWidth < 1168) {
      setShowQtt(4);
    } else if (window.innerWidth < 1436) {
      setShowQtt(5);
    } else if (window.innerWidth < 1760) {
      if (openedMenu) {
        setShowQtt(5);
      } else setShowQtt(6);
    } else if (window.innerWidth < 2086) {
      if (openedMenu) {
        setShowQtt(6);
      } else setShowQtt(7);
    } else if (window.innerWidth < 2256) {
      if (openedMenu) {
        setShowQtt(7);
      } else setShowQtt(9);
    } else setShowQtt(9);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      IsEnd(setIsEnd);
      IsTop(setIsTop);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        IsEnd(setIsEnd);
        IsTop(setIsTop);
      });
    };
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div
        className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]  
        ${
          openedMenu
            ? "1336:w-[1070px] xl 2xl:w-[1284px]"
            : "2lg:w-[1070px] 1-5xl:w-[1284px]"
        }`}
      >
        <HorizonCard
          data={vidList[0]}
          layout={layout}
          setLayout={setLayout}
          showBtn={true}
        />

        <ShortVids
          openedMenu={openedMenu}
          handleResize={handleResizeShort}
          showQtt={showQtt}
          shortResponse={shortResponse}
          shortList={shortList}
          noBtn={true}
          container1Style={"mb-0 ml-[-8px]"}
        />

        {vidList?.slice(1, vidList?.length - 1).map((item) => (
          <HorizonCard
            key={item.id}
            data={item}
            layout={layout}
            setLayout={setLayout}
          />
        ))}
      </div>
    </div>
  );
};
export default ListLayout;
