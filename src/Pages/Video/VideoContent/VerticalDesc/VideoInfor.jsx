import { formatNumber } from "../../../../util/numberFormat";
import { timeFormat } from "../../../../util/timeforMat";
import { Link } from "react-router-dom";
import { tgb } from "../../../../Assets/Images";
import {
  Verification,
  BellIcon,
  ThinArrowIcon,
  SaveIcon,
  EmptyLikeIcon,
  DownloadIcon,
  ShareIcon,
  DiaryIcon,
  Setting2Icon,
  CutIcon,
} from "../../../../Assets/Icons";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { CustomeFuncBox } from "../../../../Component";

const hovVars = {
  hover: {
    backgroundColor: "rgba(255,255,255,0.1)",
    boxShadow: "0 0 0 8px rgba(255,255,255,0.1)",
    transition: {
      duration: 0.15,
      type: "just",
    },
  },
};

const VideoInfor = ({ sub, time }) => {
  const [opened, setOpened] = useState(false);

  const boxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpened(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full'>
      <motion.div
        className='cursor-pointer rounded-[2px] '
        variants={hovVars}
        whileHover='hover'
      >
        <div
          className='text-[28px] leading-[38px]
       t-ellipsis font-bold'
        >
          Cafuné - Tek It (I Watch The Moon) [Official Video] Cafuné - Tek It (I
          Watch The Moon) [Official Video]
        </div>
        <div className='mb-[16px] mr-[8px] text-[14px] leading-[20px] font-[500] flex gap-[7px] n'>
          {/* Views */}
          <span className=''>{formatNumber(3000)} lượt xem</span>

          {/* time */}
          <span>{timeFormat(time)}</span>

          {/* hash tag */}
          <div className='text-gray-A overflow-hidden flex-1 flex gap-[5px]'>
            <span>#TekIt</span>
            <span>#IWatchTheMoon</span>
            <span>#Cafune</span>
            <span>#Cafune</span>
            <span>#Cafune</span>
          </div>
        </div>

        {/* description */}
        <div className=' text-[14px] leading-[20px] relative'>
          <span>
            The official music video for Cafuné's single 'Tek It' - from their
            album Running - available now.
          </span>
          <div
            className='absolute !min-w-[40px] left-[61%] xl:left-[34.5%] 
        top-[20px] z-[20] shadow-[-10px_1px_5px_0px_rgba(10,10,10,0.95)]'
          >
            ...thêm
          </div>
        </div>
      </motion.div>

      <motion.div
        className=' flex items-center justify-between cursor-pointer rounded-[2px] mt-[24px] '
        variants={hovVars}
        whileHover='hover'
      >
        <div className='flex'>
          <Link>
            <img
              src={tgb}
              alt='image'
              className='w-[40px] h-[40px] rounded-[50%] mr-[12px]'
            />
          </Link>
          <div className='flex  flex-col mr-[24px]'>
            <div className='flex items-center gap-[4px]' title='Thầy Giáo Ba'>
              <span className='text-[16px] leading-[22px] font-[500]'>
                Thầy Giáo Ba
              </span>
              <Verification size={"14"} />
            </div>
            <span className='text-[12px] !leading-[18px] text-gray-A'>
              {formatNumber(334000)} người đăng ký
            </span>
          </div>
        </div>
        <div
          className={`px-[16px] rounded-[18px] flex items-center
          ${
            sub
              ? "bg-hover-black hover:bg-[rgba(255,255,255,0.2)]"
              : "bg-[#ffffff] text-black"
          }
        `}
        >
          {sub && (
            <div className='ml-[-6px] mr-[6px]'>
              <BellIcon />
            </div>
          )}
          <span className='text-[14px] leading-[36px] font-[500]'>
            {sub ? "Đã Đăng ký" : "Đăng ký"}
          </span>
          {sub && (
            <div className='rotate-90 ml-[6px] mr-[-6px]'>
              <ThinArrowIcon />
            </div>
          )}
        </div>
      </motion.div>

      {/*  function button */}
      <div className='flex items-center mt-[24px]'>
        <div className='flex items-center'>
          <div
            className='rounded-l-[18px] h-[36px] flex items-center gap-[6px] relative
         bg-hover-black hover:bg-[rgba(255,255,255,0.2)] pl-[8px] pr-[18px] cursor-pointer
          after:content-[""] after:w-[1px] after:h-[24px] after:bg-[rgba(255,255,255,0.2)]
          after:absolute after:right-0
         '
          >
            <EmptyLikeIcon />

            <span className='text-[14px] leading-[36px]'>
              {formatNumber(30000)}
            </span>
          </div>

          <div
            className='rounded-r-[18px] h-[36px] flex items-center 
         bg-hover-black hover:bg-[rgba(255,255,255,0.2)] pl-[8px] pr-[18px] cursor-pointer'
          >
            <div className='rotate-180'>
              <EmptyLikeIcon />
            </div>
          </div>
        </div>
        <div className='flex gap-[8px] ml-[8px]'>
          <div
            className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%]
         bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer'
            title='Chia sẻ'
          >
            <ShareIcon />
          </div>
          <div
            className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%]
         bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer'
            title='Tải xuống'
          >
            <DownloadIcon />
          </div>
          <div
            className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%]
         bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer'
            title='Tạo đoạn video'
          >
            <CutIcon />
          </div>
          <div
            className='w-[36px] h-[36px]  flex items-center justify-center rounded-[50%]
         bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer '
            title='Lưu'
          >
            <SaveIcon />
          </div>
          <div
            className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%]
         bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer relative'
            ref={boxRef}
            onClick={(e) => {
              e.stopPropagation();
              setOpened((prev) => !prev);
            }}
          >
            <Setting2Icon />
            {opened && (
              <CustomeFuncBox
                style={"w-[169px] right-0 top-[110%]"}
                setOpened={setOpened}
                funcList1={[
                  {
                    id: 1,
                    text: "Báo vi phạm",
                    icon: <DiaryIcon />,
                  },
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoInfor;
