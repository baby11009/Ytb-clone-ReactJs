import { formatNumber } from "../../../../util/numberFormat";
import { timeFormat } from "../../../../util/timeforMat";
import { useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const headerList = [
  {
    id: 1,
    title: "Trang chủ",
    slug: "home",
  },
  {
    id: 2,
    title: "Cộng đồng",
    slug: "comunity",
  },
];

const Carousel = ({ openedMenu, data, activeId, setActiveId }) => {
  
  const [subbed, setSubbed] = useState(false);

  const [currId, setCurrId] = useState(0);

  const [isChange, setIsChange] = useState(false);

  const [currData, setCurrData] = useState(undefined);

  const [indicatorStyle, setIndicatorStyle] = useState({});

  const prevId = useRef(0);

  const menuRefs = useRef([]);

  useLayoutEffect(() => {
    setCurrData(data?.vidList[currId]);
    setSubbed(data?.subbed);
  }, [data]);

  useLayoutEffect(() => {
    let timeOut;

    prevId.current = currId;
    if (data) {
      setIsChange(true);
      timeOut = setTimeout(() => {
        setIsChange(false);
        setCurrData(data.vidList[currId]);
      }, 600);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [currId]);

  useLayoutEffect(() => {
    const activeMenuItem = menuRefs.current[activeId];
    if (activeMenuItem) {
      setIndicatorStyle({
        width: activeMenuItem.offsetWidth,
        left: activeMenuItem.offsetLeft,
      });
    }
  }, [activeId]);

  const handleButtonClick = (id) => {
    setCurrId(id);
  };

  return (
    <div>
      <div className='bg-[#272727]'>
        <div className='h-[460px] relative flex justify-center bg-[#000]'>
          <div
            className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]
            ${
              openedMenu
                ? "1336:w-[1070px] 2xl:w-[1284px]"
                : " 2lg:w-[1070px] 1-5xl:w-[1284px]"
            } py-[56px] z-[1000] flex flex-col justify-center relative
            `}
          >
            <div
              className={`flex items-center flex-wrap text-[18px] leading-[23px] max-w-[640px] mb-[28px]  
                ${isChange ? "moveOut" : "moveIn"}`}
              style={{
                "--height": "-25px",
                "--delay": ".42s",
              }}
            >
              <span>{currData?.channel?.name}</span>

              <span className="before:content-['•'] before:mx-[4px]">
                {currData?.view && formatNumber(currData.view) + " lượt xem"}
              </span>

              <span className="before:content-['•'] before:mx-[4px]">
                {currData?.postedTime && timeFormat(currData.postedTime)}
              </span>
            </div>
            <div
              className={`max-w-[720px] t-ellipsis text-[48px] leading-[57px] font-[500] mb-[12px]
                 ${isChange ? "moveOut" : "moveIn"}
                `}
              style={{
                "--height": "-25px",
                "--delay": "0.37s",
              }}
            >
              {currData?.title}
            </div>
            <div className='absolute left-0 right-0 bottom-0 py-[56px]'>
              <div className='hidden sm:flex items-center gap-[8px] '>
                {data.vidList.map((item, id) => (
                  <button
                    onClick={() => handleButtonClick(id)}
                    key={id}
                    className='relative'
                  >
                    <img
                      src={item.thumb}
                      alt=''
                      width={72}
                      height={40}
                      className='rounded-[4px] overflow-hidden'
                    />
                    {currId !== id && (
                      <div className='absolute inset-0 bg-[rgba(0,0,0,.5)]'></div>
                    )}
                  </button>
                ))}
              </div>

              <div className='flex items-center justify-end sm:hidden'>
                {data.vidList.map((item, id) => (
                  <button
                    className={`before:content-['●'] h-[12px] mx-[1px]
                    ${
                      currId === id
                        ? "text-[11px] before:text-white mt-[-3px]"
                        : "text-[10px] before:text-[rgba(255,255,255,0.3)]"
                    }
                    `}
                    onClick={() => handleButtonClick(id)}
                    key={id}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute inset-0'>
            <div
              className='absolute right-0 w-[817px] h-[460px] bg-no-repeat bg-cover'
              style={{
                backgroundImage: `url('${currData?.thumb}')`,
                backgroundPosition: "top center",
              }}
            ></div>
          </div>
          <div
            className='absolute inset-0 opacity-[1]'
            style={{
              backgroundImage:
                "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 72%, rgb(0, 0, 0) 98%)",
            }}
          ></div>
        </div>
        <div className='flex justify-center'>
          <div
            className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]
            ${
              openedMenu
                ? "1336:w-[1070px] 2xl:w-[1284px]"
                : " 2lg:w-[1070px] 1-5xl:w-[1284px]"
            }  z-[1000]
            `}
          >
            <div className='py-[16px] flex flex-col gap-[16px] sm:gap-0 sm:flex-row sm:items-center sm:justify-between'>
              <div className='flex items-center'>
                <Link>
                  <img
                    src={data?.thumb}
                    alt=''
                    className='size-[80px] rounded-[50%] mr-[24px]'
                  />
                </Link>
                <div className='flex flex-col'>
                  <span className='text-[24px] leading-[32px]'>
                    {data?.name}
                  </span>
                  <span className='text-[14px] leading-[20px] text-gray-A'>
                    {formatNumber(data?.subs)} người đăng ký
                  </span>
                </div>
              </div>
              <div>
                <button
                  className={`px-[16px] text-[14px] leading-[36px] font-[500] rounded-[18px]
                 ${
                   subbed
                     ? "bg-black-0.1 hover:bg-black-0.2 "
                     : "bg-white-F1 hover:bg-white text-black "
                 }
                 `}
                  onClick={() => setSubbed((prev) => !prev)}
                >
                  {subbed ? "Đã đăng ký" : "Đăng ký"}
                </button>
              </div>
            </div>
            <div className='flex gap-[24px] relative overflow-x-auto'>
              <div
                className='absolute bottom-0 h-[2.5px] bg-white transtion-all duration-[0.3s] ease-in'
                style={indicatorStyle}
              />
              {headerList.map((item, index) => (
                <button
                  key={index}
                  className={`h-[48px] flex items-center text-[16px] leading-[22px] font-[500]
                  text-nowrap border-b-[3px] border-transparent ${
                    activeId !== index && "  hover:border-black-0.2"
                  }`}
                  onClick={() => setActiveId(index)}
                  ref={(el) => (menuRefs.current[index] = el)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
