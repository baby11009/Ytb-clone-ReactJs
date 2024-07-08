import {
  Verification,
  BellIcon,
  ThickBellIcon,
  SlashBellIcon,
  UnSubIcon,
  SearchIcon,
  ThinArrowIcon,
} from "../../../../Assets/Icons";
import { formatNumber } from "../../../../util/numberFormat";
import { CustomeFuncBox } from "../../../../Component";
import { SwiperSlide, Swiper } from "swiper/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const funcList = [
  {
    id: 1,
    title: "Trang chủ",
    slug: "home",
  },
  {
    id: 2,
    title: "Video",
    slug: "video",
  },
  {
    id: 3,
    title: "Shorts",
    slug: "short",
  },
  {
    id: 4,
    title: "Sự kiện trực tiếp",
    slug: "live",
  },
  {
    id: 5,
    title: "Danh sách phát",
    slug: "playlist",
  },
  {
    id: 6,
    title: "Cộng đồng",
    slug: "comunity",
  },
];

const CustomeButton = ({ data, display, setDisplay }) => {
  return (
    <div
      className={`border-b-[3px] cursor-pointer
            ${
              display.title === data.slug
                ? " border-white-F1"
                : "border-[transparent] hover:border-gray-71"
            }
            `}
      onClick={() => {
        setDisplay({
          title: data.slug,
          payload: undefined,
        });
      }}
    >
      {data.title}
    </div>
  );
};

const ChannelInfor = ({
  banner,
  channelImg,
  name,
  sub,
  openedMenu,
  display,
  setDisplay,
}) => {
  const boxRef = useRef();

  const inputBox = useRef();

  const inputRef = useRef();

  const [notiMod, setNotiMod] = useState({
    id: 3,
    icon: <BellIcon />,
  });

  const [subbed, setSubbed] = useState(sub);

  const [opened, setOpened] = useState("");

  const [focused, setFocused] = useState(false);

  const [value, setValue] = useState("");

  const funcList2 = [
    {
      id: 1,
      text: "Tất cả",
      icon: <ThickBellIcon />,
      handleOnClick: (data) => {
        setNotiMod({
          id: data.id,
          icon: data.icon,
        });
      },
    },
    {
      id: 2,
      text: "Dành riêng cho bạn",
      icon: <BellIcon />,
      handleOnClick: (data) => {
        setNotiMod({
          id: data.id,
          icon: data.icon,
        });
      },
    },
    {
      id: 3,
      text: "Không nhận thông báo",
      icon: <SlashBellIcon />,
      handleOnClick: (data) => {
        setNotiMod({
          id: data.id,
          icon: data.icon,
        });
      },
    },
    {
      id: 4,
      text: "Hủy đăng ký",
      icon: <UnSubIcon />,
      handleOnClick: (icon) => {
        setSubbed(false);
      },
    },
  ];

  const handlePressEnter = (e) => {
    if (e.key === "Enter" && value !== "") {
      setDisplay({
        title: "search",
        payload: {
          text: value,
        },
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpened("");
      }
      if (inputBox.current && !inputBox.current.contains(e.target)) {
        setFocused("");
        setValue("");
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <div
      className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]
    ${
      openedMenu
        ? "1336:w-[1070px] 2xl:w-[1284px]"
        : " 2lg:w-[1070px] 1-5xl:w-[1284px]"
    } border-b-[1px] border-[rgba(255,255,255,0.2)]`}
    >
      {/*  Channel Banner */}
      <div className='pt-[16.12%] h-0 relative rounded-[12px] overflow-hidden'>
        <div
          className='absolute top-0 w-full h-full  bg-center bg-cover bg-no-repeat'
          style={{
            backgroundImage: `url('${banner}')`,
          }}
        ></div>
      </div>

      {/* Infor */}
      <div className='pt-[16px] pb-[4px] flex items-center mb-[12px]'>
        <img
          src={channelImg}
          alt=''
          className='hidden sm:inline-block w-[160px] h-[160px] rounded-[50%] mr-[24px]'
        />

        <div className='w-full text-[14px] leading-[20px]'>
          <div className='flex items-center gap-[5px] mb-[4px]'>
            <div className='text-[24px] leading-[32px] sm:text-[36px] sm:leading-[50px] font-bold'>
              {name}
            </div>
            <Verification size={"14"} />
          </div>

          <div className='flex flex-col items-start sm:flex-row sm:items-center text-gray-A'>
            <span className=" after:content-['‧'] after:mx-[4px]">
              @thaygiaoba6325
            </span>
            <span className=" after:content-['‧'] after:mx-[4px]">
              {formatNumber(335000)} người đăng ký
            </span>
            <span>{formatNumber(2100)} video</span>
          </div>

          <div className='flex items-center py-[10px] text-gray-A'>
            <span className='t-1-ellipsis flex-1 text-nowrap'>
              Kênh tấu hài của cựu game thủ chuyên nghiệp kiêm hlv bù nhìn Ba
              Rọi Béo aka Thầy Giáo Ba
            </span>

            <div className='w-[24px] h-[24px] flex items-center justify-center cursor-pointer'>
              <ThinArrowIcon />
            </div>
          </div>

          <a
            href='https://www.youtube.com/channel/UCHApD6LBIxIusJy7VVgocfA'
            target='_blank'
            className='text-blue-3E py-[4px] t-1-ellipsis'
          >
            youtube.com/channel/UCHApD6LBIxIusJy7VVgocfA
          </a>

          {/* Func Btn */}
          <div className='pt-[10px] pb-[6px] flex flex-col items-start sm:flex-row sm:items-center gap-[8px]'>
            <button
              className={`px-[16px] h-[36px] rounded-[18px] flex items-center relative
                
                    ${
                      subbed
                        ? "bg-hover-black hover:bg-[rgba(255,255,255,0.2)]"
                        : "bg-[#ffffff] text-black"
                    }`}
              onClick={(e) => {
                e.stopPropagation();
                if (!subbed) {
                  setSubbed(true);
                  setNotiMod({
                    id: 3,
                    icon: <BellIcon />,
                  });
                } else {
                  setOpened((prev) => (prev === "sub" ? "" : "sub"));
                }
              }}
              ref={boxRef}
            >
              {subbed && (
                <div className='ml-[-6px] mr-[6px]'>{notiMod.icon}</div>
              )}

              <span className='text-[14px] leading-[36px] font-[500]'>
                {subbed ? "Đã đăng ký" : "Đăng ký"}
              </span>

              {subbed && (
                <div className='rotate-90 ml-[6px] mr-[-6px] w-[24px] h-[24px] flex items-center justify-center'>
                  <ThinArrowIcon />
                </div>
              )}

              {opened === "sub" && (
                <CustomeFuncBox
                  style={"left-0 top-[101.5%]"}
                  setOpened={setOpened}
                  funcList1={funcList2}
                  currentId={notiMod.id}
                />
              )}
            </button>

            <button
              className='leading-[36px] font-bold px-[15px] rounded-[18px]
              border-[1px] border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.2)] hover:border-[transparent]'
            >
              Tham gia
            </button>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView='auto'
        className='flex !mx-0 w-full text-[16px] leading-[48px] font-[500]'
        spaceBetween={24}
        resistanceRatio={0.5}
      >
        {funcList.map((item) => (
          <SwiperSlide className='!w-fit' key={item.id}>
            <CustomeButton
              data={item}
              display={display}
              setDisplay={setDisplay}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide className='!w-fit'>
          <div className='h-[48px] flex items-center !w-fit' ref={inputBox}>
            <motion.button
              className='w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'
              whileTap={{
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => {
                setFocused((prev) => !prev);
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <SearchIcon color={"#aaaaaa"} />
            </motion.button>

            {focused && (
              <div className='flex flex-col items-center'>
                <input
                  type='text'
                  ref={inputRef}
                  placeholder='Tìm kiếm'
                  className='outline-none bg-[transparent] text-[14px] 
                    leading-[20px] font-normal py-[4px]'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={handlePressEnter}
                />
                <div className='relative w-full'>
                  <div className='h-[2px] bg-[#aaaaaa] origin-center'></div>
                  {focused && (
                    <motion.div
                      className='h-[2px] bg-[#ffffff] origin-center absolute top-0 left-[50%] w-[0] '
                      animate={{
                        width: "100%",
                        left: 0,
                      }}
                      transition={{
                        delay: 0.05,
                      }}
                    ></motion.div>
                  )}
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default ChannelInfor;
