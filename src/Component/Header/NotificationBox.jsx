import { useState, useEffect, useRef } from "react";
import {
  SettingIcon,
  Setting2Icon,
  DotIcon,
  BlockNotifyIcon,
  HideIcon,
} from "../../Assets/Icons";
import { levi, v1_levi } from "../../Assets/Images";
import { motion } from "framer-motion";

const NotiCard = () => {
  const [showed, setShowed] = useState(false);

  const [opened, setOpened] = useState(false);

  const containRef = useRef();

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

  return (
    <li
      className='py-[16px] pr-[16px] flex hover:bg-hover-black'
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
      <div className='mx-[6px] mt-[22px]'>
        <DotIcon />
      </div>
      <div className='mr-[16px]'>
        <img
          src={levi}
          alt='channel image'
          className='w-[48px] h-[48px] rounded-[50%]'
        />
      </div>
      <div className='flex-1 text-left'>
        <h3 className='leading-[20px] text-[14px] mb-[8px]'>
          Levi đã tải lên: TRUYỆN CƯỜI LEVI VÀ CÂU CHUYỆN CÂN 4 THẰNG Ở CỔNG
          TRƯỜNG CẤP 3
        </h3>
        <div>
          <span className='text-gray-A text-[12px] leading-[18px]'>
            1 ngày trước
          </span>
        </div>
      </div>
      <div className='w-[86px] ml-[16px] mr-[8px]'>
        <img src={v1_levi} alt='' />
      </div>
      <motion.div
        className='w-[40px] h-[40px] rounded-[50%] 
        flex items-center justify-center relative'
        whileTap={{
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          setOpened((prev) => !prev);
        }}
        ref={containRef}
      >
        {showed && <Setting2Icon />}
        {opened && (
          <div
            className='bg-[#282828] min-w-[265px] text-[14px] leading-[20px] py-[8px]
                   absolute right-0 top-[100%] rounded-[12px]'
          >
            <div className='pl-[16px] pr-[12px] py-[8px] flex items-center hover:bg-hover-black'>
              <div className='mr-[16px]'>
                <HideIcon />
              </div>
              <h3>Ẩn thông báo này</h3>
            </div>
            <div className='pl-[16px] pr-[12px] py-[8px] flex items-center hover:bg-hover-black'>
              <div className='mr-[16px]'>
                <BlockNotifyIcon />
              </div>
              <h3>Tắt tất cả thông báo từ levi</h3>
            </div>
          </div>
        )}
      </motion.div>
    </li>
  );
};

const NotificationBox = ({ setOpened }) => {
  const notifyList = Array.from({ length: 8 }, (_, i) => i + 1);

  const [loaded, setLoaded] = useState(true);

  const containRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 2000);

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

  return (
    <div
      className='max-w-[480px] w-[90vw] h-[90vh] bg-[#282828] 
    absolute top-[110%] z-[500] right-0 rounded-[12px] flex flex-col justify-center'
      ref={containRef}
    >
      {loaded ? (
        <div
          className='mx-auto  w-[40px] h-[40px] rounded-[50%] 
            border-t-[2px] border-l-[3px]  border-[rgba(255,255,255,0.5)] animate-spin'
        ></div>
      ) : (
        <>
          <div className='min-h-[48px] flex items-center justify-between border-b-[1px] border-b-[rgba(255,255,255,0.2)]'>
            <div className='ml-[16px] leading-[22px]'>Thông báo</div>
            <div
              className='w-[40px] h-[40px] mr-[8px] flex items-center justify-center'
              title='Cài đặt'
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <SettingIcon />
              </div>
            </div>
          </div>
          <ul className=' overflow-y-auto menu-scrollbar flex-1'>
            {notifyList.map((item) => (
              <NotiCard key={item} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default NotificationBox;
