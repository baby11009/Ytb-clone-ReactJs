import { useLocation } from "react-router-dom";
import {
  ComunityCard,
  CustomeFuncBox,
  CommentInput,
  Comment,
} from "../../../Component";
import { formatNumber } from "../../../util/numberFormat";
import { SortIcon } from "../../../Assets/Icons";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MyChannel } from "../../../Assets/Images";
import { IsEnd, IsTop } from "../../../util/scrollPosition";

const PostPart = ({ openedMenu }) => {
  const location = useLocation();

  const data = location.state || {};

  const [currentIndex, setCurrentIndex] = useState(1);

  const containerRef = useRef();

  const [opened, setOpened] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isEnd, setIsEnd] = useState(false);

  const [isTop, setIsTop] = useState(true);

  const [cmtQtt, setCmtQtt] = useState(5);

  const handleFuncClick = (data) => {
    setCurrentIndex(data.id);
  };

  const funcList = [
    {
      id: 1,
      text: "Bình luận hàng đầu",
      handleOnClick: handleFuncClick,
    },
    {
      id: 2,
      text: "Mới nhất xếp trước",
      handleOnClick: handleFuncClick,
    },
  ];

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

  useEffect(() => {
    let timeOut;

    if (isEnd) {
      setIsLoading(true);
      timeOut = setTimeout(() => {
        setCmtQtt((prev) => prev + 2);
        setIsLoading(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [isEnd]);

  useEffect(() => {
    if (isTop) {
      setCmtQtt(5);
    }
  }, [isTop]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpened(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='flex justify-center mt-[30px]'>
      <div
        className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]
      ${
        openedMenu
          ? "1336:w-[1070px] xl 2xl:w-[1284px]"
          : "2lg:w-[1070px] 1-5xl:w-[1284px]"
      }`}
      >
        <div className='w-full max-w-[856px]'>
          <div className='border-b-[1px] border-b-black-0.2'>
            {data.id && <ComunityCard data={data} noNav={true} />}
          </div>
          <div>
            <div className='mt-[24px] mb-[32px]'>
              <div className='mb-[24px] flex items-center'>
                <div className='text-[20px] leading-[28px] font-bold mr-[32px]'>
                  {formatNumber(data.cmtQtt)} bình luận
                </div>

                <motion.div
                  className='cursor-pointer relative'
                  whileTap={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                  }}
                  onClick={() => setOpened((prev) => !prev)}
                  ref={containerRef}
                >
                  <div className='flex items-center text-[14px] leading-[22px] font-[500]'>
                    <div className='mr-[8px]'>
                      <SortIcon />
                    </div>
                    <span className='text-nowrap'>Sắp xếp theo</span>
                  </div>
                  {opened && (
                    <CustomeFuncBox
                      setOpened={setOpened}
                      style={"left-0 top-[150%]"}
                      funcList1={funcList}
                      currentId={currentIndex}
                    />
                  )}
                </motion.div>
              </div>

              <CommentInput
                myChannelImg={MyChannel}
                showEmoji={true}
                imgSize={"size-[40px]"}
              />
            </div>
            <div>
              {[...Array(cmtQtt)].map((_, index) => (
                <Comment
                  verify={true}
                  reply={true}
                  imgSize={"size-[40px]"}
                  key={index}
                />
              ))}
              {isLoading && (
                <div className='my-[40px] flex items-center justify-center'>
                  <div
                    className='w-[40px] h-[40px] rounded-[50px] border-[3px] border-[rgba(255,255,255,0.4)] 
                        border-b-[transparent] border-l-[transparent] animate-spin'
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostPart;
