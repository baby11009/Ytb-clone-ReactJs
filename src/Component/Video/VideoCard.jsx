import {
  Verification,
  LiveIcon,
  Setting2Icon,
  BlockIcon,
  AddWLIcon,
  AddPLIcon,
  DownloadIcon,
  ShareIcon,
  NoSuggetIcon,
  WatchedIcon,
  DiaryIcon,
  LaterIcon,
  PlayListIcon,
  CloseIcon,
} from "../../Assets/Icons";
import { motion, useAnimate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomeFuncBox } from "..";
import { timeFormat } from "../../util/timeforMat";
import { formatNumber } from "../../util/numberFormat";
import { durationCalc } from "../../util/durationCalc";

const funcList1 = [
  {
    id: 1,
    text: "Thêm vào danh sách chờ",
    icon: <AddWLIcon />,
  },
  {
    id: 2,
    text: "Lưu vào danh sách Xem sau",
    icon: <WatchedIcon />,
  },
  {
    id: 3,
    text: "Thêm vào danh sách phát",
    icon: <AddPLIcon />,
  },
  {
    id: 4,
    text: "Tải xuống",
    icon: <DownloadIcon />,
  },
  {
    id: 5,
    text: "Chia sẻ",
    icon: <ShareIcon />,
  },
];
const funcList2 = [
  {
    id: 1,
    text: "Không quan tâm",
    icon: <BlockIcon />,
  },
  {
    id: 2,
    text: "Không đề xuất kênh này",
    icon: <NoSuggetIcon />,
  },
  {
    id: 3,
    text: "Báo cao vi phạm",
    icon: <DiaryIcon />,
  },
];

const view = 1200000;

const postedTime = "05/12/2024, 6:05:20 PM";

const duration = 12500;

const progress = 20;

const HoverButton = ({ title, icon }) => {
  const [scope, animate] = useAnimate();

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (scope.current) {
      if (hovered) {
        animate(
          scope.current,
          {
            backgroundColor: "rgba(0, 0, 0,1)",
          },
          {
            duration: 0,
            type: "tween",
          }
        );
        animate(
          "h3",
          {
            transform: "translateX(0)",
          },
          {
            duration: 0.2,
            delay: 0.4,
            type: "tween",
          }
        );
      } else {
        animate(
          scope.current,
          {
            backgroundColor: "rgba(0, 0, 0,.8)",
          },
          {
            duration: 0,
            type: "tween",
          }
        );
        animate(
          "h3",
          {
            transform: "translateX(100%)",
          },
          {
            duration: 0.3,
            type: "tween",
          }
        );
      }
    }
  }, [hovered]);

  return (
    <motion.button
      className={`m-[8px] w-[28px] h-[28px] bg-[rgba(0,0,0,.8)] rounded-[4px]
      flex items-center justify-center relative z-[10]`}
      ref={scope}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className='block overflow-hidden absolute right-[24px] rounded-l-[4px] 
          text-nowrap text-[12px] leading-[28px] font-[500]'
      >
        <h3 className='translate-x-[100%] bg-[#000000] pl-[8px] pr-[6px]'>
          {title}
        </h3>
      </div>
      <div onMouseEnter={() => setHovered(true)}>{icon}</div>
    </motion.button>
  );
};

const VideoCard = ({
  data,
  showBtn,
  showLive,
  showCloseBtn,
  layout,
  style,
  styleInline,
  ctContainerStyle,
  infoStyle,
  titleStyle,
  descStyle,
  thumbStyle,
  thumbStyleInline,
  imgStyle,
  noFuncBox,
  noFunc2,
  funcBoxPos,
}) => {
  const containRef = useRef();

  const [showed, setShowed] = useState(false);

  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containRef.current && !containRef.current.contains(event.target)) {
        setOpened("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/channel/${id}`);
  };

  const handleRemove = (id) => {};

  return (
    <Link
      to={`/video/${5}`}
      className={`flex-1 relative ${style || "mx-[8px] mb-[40px]"}`}
      style={styleInline}
      onMouseOver={() => {
        if (!opened) {
          setShowed(true);
        }
      }}
      onMouseOut={() => {
        if (!opened) {
          setShowed(false);
        }
      }}
    >
      <div
        className={`relative overflow-hidden ${
          thumbStyle || "mb-[12px] rounded-[12px]"
        } `}
        style={thumbStyleInline}
      >
        <img src={data.thumb} alt='' className='w-full' />

        {/* duration */}
        {data.type.status !== "is live" && (
          <div
            className='absolute bottom-0 right-0 bg-[rgba(0,0,0,0.6)] text-white px-[4px] py-[1px] 
        mr-[8px] mb-[8px] text-[12px] leading-[18px] rounded-[4px]'
          >
            {durationCalc(data.duration || duration)}
          </div>
        )}

        {/* progress bar */}
        {!showLive && data.progress !== 0 && (
          <div className='w-full absolute bottom-0 h-[4px] bg-gray-71'>
            <div
              className='absolute h-full bg-red-FF'
              style={{
                width: data.progress || progress + "%",
              }}
            ></div>
          </div>
        )}

        {/* Hover things */}
        {showed && showBtn && (
          <div className='absolute right-0 top-0'>
            <HoverButton title={"Xem sau"} icon={<LaterIcon />} />
            <HoverButton
              title={"Thêm vào danh sách chờ"}
              icon={<PlayListIcon />}
            />
          </div>
        )}
        {showLive &&
          data.type.title === "live" &&
          data.type.status === "is live" && (
            <div
              className={`bg-[rgba(204,0,0,0.9)] m-[4px] px-[4px] w-fit rounded-[2px]
             text-white text-[12px] leading-[18px] flex items-center absolute right-0 bottom-0
            `}
            >
              <LiveIcon />
              <p>Trực tiếp</p>
            </div>
          )}
      </div>

      <div className={` flex-1 flex  ${ctContainerStyle}`}>
        {data.channel?.img && (
          <div
            className={`w-[36px] h-[36px] rounded-[50%] overflow-hidden cursor-pointer mr-[12px] ${imgStyle}`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleNavigate(5);
            }}
          >
            <img src={data.channel.img} alt='' />
          </div>
        )}
        <div className='flex-1 flex relative'>
          <div className={`pr-[24px] flex-1`}>
            <div className='flex'>
              <h4
                className={`t-ellipsis mb-[4px] flex-1 ${
                  titleStyle ||
                  "text-[16px] leading-[22px] max-h-[44px] font-[500]"
                }`}
              >
                {data.title}
              </h4>
              {showCloseBtn && (
                <div
                  className='size-[40px] rounded-[50%] flex items-center justify-center
                 active:bg-black-0.2 cursor-pointer mt-[-6px] mr-[10px]'
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleRemove(5);
                  }}
                >
                  <CloseIcon />
                </div>
              )}
              {showed && (
                <div
                  className='w-[40px] h-[40px] rounded-[50%] flex items-center justify-center 
                  absolute right-0 translate-x-[30%] translate-y-[-15%] z-[500] active:bg-black-0.2'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpened((prev) => !prev);
                  }}
                  ref={containRef}
                >
                  <Setting2Icon />
                  {opened && !noFuncBox && (
                    <CustomeFuncBox
                      style={`w-[270px] right-[20%]  top-[100%] ${
                        funcBoxPos ? funcBoxPos : "sm:left-[-20%]"
                      }`}
                      setOpened={setOpened}
                      funcList1={funcList1}
                      funcList2={!noFunc2 && funcList2}
                    />
                  )}
                </div>
              )}
            </div>
            <div
              className={` text-gray-A ${
                infoStyle ||
                "text-[12px] leading-[18px] sm:text-[14px] sm:leading-[20px]"
              }`}
            >
              {data.channel?.name && (
                <div className='flex items-center gap-[4px] mr-[8px]'>
                  <div
                    title={data.channel.name}
                    className='hover:text-white-F1'
                  >
                    {data.channel.name}
                  </div>
                  {data.channel.subs >= 100000 && (
                    <div>
                      <Verification size={"14"} />
                    </div>
                  )}
                </div>
              )}

              {data.type.status !== "is live" && (
                <div className='flex flex-wrap items-center'>
                  <span>{formatNumber(data?.view || view)} lượt xem</span>
                  <span
                    className={`${
                      layout === "horizon" && "hidden"
                    } before:content-['•'] before:mx-[4px]`}
                  >
                    {data.type.status === "live end" && "Phát trực tiếp "}
                    {timeFormat(data.postedTime || postedTime)}
                  </span>
                </div>
              )}

              {data.type.title === "live" && data.type.status === "is live" && (
                <div className='flex flex-col'>
                  <span>{formatNumber(1800)} đang xem</span>
                  {!showLive && (
                    <div
                      className={`bg-[rgba(204,0,0,0.9)] mt-[4px] px-[4px] w-fit rounded-[2px]
                       text-white text-[12px] leading-[18px] flex items-center
                       `}
                    >
                      <LiveIcon />
                      <p>Trực tiếp</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {data.desc && (
              <div
                className={`t-ellipsis text-[12px] leading-[18px]
                 text-gray-A pt-[8px] mb-[8px] ${descStyle}`}
              >
                {data.desc}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;
