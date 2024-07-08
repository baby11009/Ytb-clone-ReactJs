import { useState, useEffect, useRef } from "react";
import { IsEnd, IsTop } from "../../../../../util/scrollPosition";
import { CustomeFuncBox } from "../../../../../Component";
import { SortIcon } from "../../../../../Assets/Icons";
import { motion } from "framer-motion";
import PlaylistList from "./PlaylistList";

const ChannelPlaylist = () => {

  const [currentIndex, setCurrentIndex] = useState(1);

  const containerRef = useRef();

  const handleFuncClick = (data) => {
    setCurrentIndex(data.id);
  };

  const funcList = [
    {
      id: 1,
      text: "Ngày thêm (mới nhất)",
      handleOnClick: handleFuncClick,
    },
    {
      id: 2,
      text: "Video đã thêm lần cuối",
      handleOnClick: handleFuncClick,
    },
  ];

  const [opened, setOpened] = useState(false);

  const [isEnd, setIsEnd] = useState(false);

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpened(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    window.addEventListener("scroll", () => {
      IsEnd(setIsEnd);
      IsTop(setIsTop);
    });

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);

      window.removeEventListener("scroll", () => {
        IsEnd(setIsEnd);
        IsTop(setIsTop);
      });
    };
  }, []);

  return (
    <div>
      <div className='my-[8px] h-[56px] flex items-center justify-between'>
        <motion.div
          className='text-[16px] leading-[22px] cursor-default t-1-ellipsis flex-1'
          whileTap={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          Danh sách phát đã tạo
        </motion.div>
        <motion.div
          className='cursor-pointer relative'
          whileTap={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
          onClick={() => setOpened((prev) => !prev)}
          ref={containerRef}
        >
          <div className='flex items-center text-[14px] leading-[22px] font-bold'>
            <div className='mr-[8px]'>
              <SortIcon />
            </div>
            <span className="text-nowrap">Sắp xếp theo</span>
          </div>
          {opened && (
            <CustomeFuncBox
              setOpened={setOpened}
              style={"right-[5%] top-[150%]"}
              funcList1={funcList}
              currentId={currentIndex}
            />
          )}
        </motion.div>
      </div>

      <PlaylistList isEnd={isEnd} isTop={isTop} />
    </div>
  );
};
export default ChannelPlaylist;
