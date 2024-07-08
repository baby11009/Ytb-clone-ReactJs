import { timeFormat } from "../../../util/timeforMat";
import { vidList1 } from "../../../Mock Data/videoData";
import { shortList1 } from "../../../Mock Data/shortData";
import { VideoCard, HorizonShorts } from "../../../Component";
import {
  StopIcon,
  SearchIcon,
  SettingIcon,
  TrashBinIcon,
} from "../../../Assets/Icons";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const ContentByDate = ({ date, vidList, shortList }) => {
  return (
    <div>
      <div className='pt-[24px] pb-[8px] text-[20px] leading-[28px] font-bold '>
        {timeFormat(date)?.includes("giờ") ? "Hôm nay" : "Hôm qua"}
      </div>
      <div>
        <HorizonShorts shortList={shortList} />
      </div>
      <div className='w-full'>
        {vidList?.map((data) => {
          return (
            <VideoCard
              key={data.id}
              data={data}
              layout={"horizon"}
              showLive={data.type.title === "live"}
              showCloseBtn={true}
              noFunc2={true}
              style={"flex gap-[16px] mx-0 mb-0 mt-[16px]"}
              thumbStyle={
                "min-w-[246px] w-[246px] h-[138px] mb-0 rounded-[8px]"
              }
              titleStyle={"text-[18px] leading-[26px] font-[400]  max-h-[56px]"}
              infoStyle={"flex flex-wrap text-[12px] leading-[18px]"}
              ctContainerStyle={"hidden xsm:flex"}
              imgStyle={"hidden"}
              liveStyle={"hidden"}
            />
          );
        })}
      </div>
    </div>
  );
};

const WatchedPart = ({ openedMenu }) => {
  const inputRef = useRef();

  const [focused, setFocused] = useState(false);

  const [value, setValue] = useState("");

  return (
    <div className='flex justify-center'>
      <div
        className={` 2md:pr-[442px] min-h-screen 
        w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]  
        ${
          openedMenu
            ? "1336:w-[1070px] xl 2xl:w-[1284px]"
            : "2lg:w-[1070px] 1-5xl:w-[1284px]"
        }`}
      >
        <div className='pt-[24px] pb-[4px] text-[36px] leading-[50px] font-bold'>
          <span>Nhật ký xem</span>
        </div>
        <div className=' 2md:fixed 2md:right-0  2md:h-full'>
          <div className=' 2md:w-[385px] 2md:mx-[28px] mt-[8px] 2md:mb-[50px]'>
            <div className='text-[14px] leading-[36px]'>
              <form>
                <div className='mx-[16px] mt-[4px] mb-[8px] py-[8px] h-[56px] flex items-center max-w-[250px] relative'>
                  <div className='ml-[-8px]'>
                    <button
                      className='w-[40px] h-[40px] rounded-[50%] flex items-center justify-center active:bg-black-0.2'
                      onClick={(e) => {
                        e.stopPropagation();
                        if (inputRef.current) {
                          inputRef.current.focus();
                        }
                      }}
                    >
                      <SearchIcon color={"#aaaaaa"} />
                    </button>
                  </div>
                  <input
                    type='text'
                    ref={inputRef}
                    placeholder='Tìm kiếm trong danh sách video ...'
                    className='w-[90%] outline-none bg-[transparent] text-[14px] 
                    leading-[20px] font-normal py-[4px]'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={(e) => setFocused(true)}
                    onBlur={(e) => setFocused(false)}
                  />
                  <div className='absolute bottom-0 w-full'>
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
              </form>

              <button className='mt-[16px] px-[16px] flex items-center rounded-[18px] hover:bg-black-0.2'>
                <div className='ml-[-6px] mr-[6px]'>
                  <TrashBinIcon />
                </div>
                <span className='text-nowrap'>Xoá tất cả nhật ký xem</span>
              </button>

              <button className='mt-[16px] px-[16px] flex items-center rounded-[18px] hover:bg-black-0.2'>
                <div className='ml-[-6px] mr-[6px]'>
                  <StopIcon />
                </div>
                <span className='text-nowrap'>Tạm dừng lưu nhật ký xem</span>
              </button>

              <button className='mt-[16px] px-[16px] flex items-center rounded-[18px] hover:bg-black-0.2'>
                <div className='ml-[-6px] mr-[6px]'>
                  <SettingIcon />
                </div>
                <span className='text-nowrap'>
                  Quản lý toàn bộ lịch sử hoạt động
                </span>
              </button>

              <div>
                <div className='mt-[4px] ml-[32px] flex flex-col'>
                  <Link className='pl-[16px] pr-[36px]'>
                    <span className='text-[14px] leading-[40px] text-gray-A'>
                      Bình luận
                    </span>
                  </Link>
                  <Link className='pl-[16px] pr-[36px]'>
                    <span className='text-[14px] leading-[40px] text-gray-A'>
                      Bài đăng
                    </span>
                  </Link>
                  <Link className='pl-[16px] pr-[36px]'>
                    <span className='text-[14px] leading-[40px] text-gray-A'>
                      Trò chuyện trực tiếp
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContentByDate
            date={"06/29/2024, 10:05:30 PM"}
            vidList={vidList1}
            shortList={shortList1}
          />
          <ContentByDate
            date={"06/28/2024, 10:05:30 PM"}
            vidList={vidList1}
            shortList={shortList1}
          />
        </div>
      </div>
    </div>
  );
};
export default WatchedPart;
