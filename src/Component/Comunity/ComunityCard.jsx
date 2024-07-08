import { timeFormat } from "../../util/timeforMat";
import { formatNumber } from "../../util/numberFormat";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { smoothScroll, checkScrollPosition } from "../../util/scrollCustom";
import {
  ThinArrowIcon,
  ImageIcon,
  EmptyLikeIcon,
  ThickLikeIcon,
  EmptyCommentIcon,
  Setting2Icon,
  DiaryIcon,
} from "../../Assets/Icons";
import CustomeFuncBox from "../Box/CustomeFuncBox";
import { motion } from "framer-motion";

const funcList = [
  {
    id: 1,
    text: "Báo cáo vi phạm",
    icon: <DiaryIcon />,
  },
];

const ComunityCard = ({ data, noNav }) => {
  const navigate = useNavigate();

  const postRef = useRef();

  const boxRef = useRef();

  const [postWidth, setPostWidth] = useState(0);

  const [atStart, setAtStart] = useState(true);

  const [atEnd, setAtEnd] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const [isDisliked, setIsDisliked] = useState(false);

  const [opened, setOpened] = useState(false);

  const handlNavigate = () => {
    if (!noNav) {
      navigate(`/post/${data.id}`, { state: data });
    }
  };

  const handleScrollLeft = (e) => {
    e.stopPropagation();

    smoothScroll("left", postRef, 200, postWidth);
  };
  const handleScrollRight = (e) => {
    e.stopPropagation();
    smoothScroll("right", postRef, 200, postWidth);
  };

  useEffect(() => {
    const currentRef = postRef.current;
    checkScrollPosition(postRef, setAtStart, setAtEnd);
    const updatePostWidth = () => {
      requestAnimationFrame(() => {
        setPostWidth(Number(currentRef.getBoundingClientRect().width));
      });
    };

    if (currentRef) {
      updatePostWidth();
      currentRef.addEventListener("scroll", () =>
        checkScrollPosition(postRef, setAtStart, setAtEnd)
      );

      window.addEventListener("resize", updatePostWidth);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", () =>
          checkScrollPosition(postRef, setAtStart, setAtEnd)
        );
        window.removeEventListener("resize", updatePostWidth);
      }
    };
  }, [postRef.current]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpened(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`inline-block mt-[40px] px-[16px] pt-[16px] pb-[8px] w-full max-w-[856px] 
    rounded-[12px] border-[1px] border-black-0.2 ${!noNav && "cursor-pointer"}`}
      onClick={handlNavigate}
    >
      <div className='flex'>
        {/* channel image */}
        <div className='w-[40px] h-[40px] rounded-[50%] overflow-hidden mr-[16px]'>
          <img src={data?.channel.img} alt='channel image' />
        </div>

        {/* Post content */}
        <div>
          {/* channel name & time */}
          <div className='flex items-center mb-[2px]'>
            <div className='text-[13px] leading-[20px] mr-[8px] cursor-pointer'>
              {data?.channel.name}
            </div>
            <span className='text-[12px] leading-[20px]'>
              {timeFormat(data.time)}
            </span>
          </div>

          {/* post text */}
          <div className='text-[16px] leading-[22px]'>{data?.text}</div>

          {/* image slider */}
          <div className='mt-[4px] w-full relative'>
            {!atEnd && (
              <button
                onClick={handleScrollRight}
                className={`sd4 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
                    bg-[#212121]  z-[20] absolute right-0 translate-x-[50%] top-[50%] translate-y-[-50%] `}
              >
                <div className='hover:bg-[rgba(255,255,255,0.2)] w-full h-full flex items-center justify-center'>
                  <ThinArrowIcon />
                </div>
              </button>
            )}
            {!atStart && (
              <button
                onClick={handleScrollLeft}
                className='sd4 w-[40px] h-[40px] rounded-[50%] overflow-hidden 
                    bg-[#212121] z-[20] absolute left-0 translate-x-[-50%] top-[50%] translate-y-[-50%]'
              >
                <div className='hover:bg-[rgba(255,255,255,0.2)] w-full h-full flex items-center justify-center rotate-[180deg]'>
                  <ThinArrowIcon />
                </div>
              </button>
            )}
            <div
              className='w-[28px] h-[28px] rounded-[4px] bg-[rgba(0,0,0,0.8)] flex items-center 
            justify-center absolute bottom-0 right-0 mr-[6px] mb-[5px]'
            >
              <ImageIcon />
            </div>
            <div
              className='mt-[8px] flex w-full max-w-[638px] whitespace-nowrap overflow-x-auto hidden-scorllbar'
              ref={postRef}
            >
              {data?.postImg.map((item, id) => (
                <div
                  className=' flex-shrink-0 w-full rounded-[12px] overflow-hidden'
                  key={id}
                >
                  <img src={item} alt={`post image ${id}`} />
                </div>
              ))}
            </div>
          </div>

          {/* post like & cmt */}
          <div className='mt-[4px] flex items-center'>
            <div className='flex items-center'>
              <div
                className='h-[32px] w-[32px] rounded-[50%] hover:bg-black-0.2 flex
                 items-center justify-center cursor-pointer'
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked((prev) => !prev);
                  if (isDisliked) {
                    setIsDisliked(false);
                  }
                }}
              >
                {isLiked ? <ThickLikeIcon /> : <EmptyLikeIcon />}
              </div>
              <span className='text-[12px] leading-[18px] text-gray-A mr-[8px]'>
                {formatNumber(data.likeQtt || 0)}
              </span>
            </div>

            <div
              className='h-[32px] w-[32px] rounded-[50%] hover:bg-black-0.2 flex items-center
               justify-center rotate-180 cursor-pointer'
              onClick={(e) => {
                e.stopPropagation();
                setIsDisliked((prev) => !prev);
                if (isLiked) {
                  setIsLiked(false);
                }
              }}
            >
              {isDisliked ? <ThickLikeIcon /> : <EmptyLikeIcon />}
            </div>
            {!noNav && (
              <div className='flex items-center ml-[8px] px-[12px] rounded-[16px] hover:bg-black-0.2 cursor-pointer'>
                <div className='ml-[-4px] mr-[4px]'>
                  <EmptyCommentIcon />
                </div>
                <span className='text-[12px] leading-[32px] text-white font-[500]'>
                  {formatNumber(data.cmtQtt || 0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* post func */}

        <div>
          <div className='relative'>
            <motion.div
              className='w-[40px] h-[40px] rounded-[50%] flex items-center justify-center cursor-pointer'
              whileTap={{
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
              ref={boxRef}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setOpened((prev) => !prev);
              }}
            >
              <Setting2Icon />
            </motion.div>
            {opened && (
              <CustomeFuncBox
                style={"top-[100%] right-0"}
                funcList1={funcList}
                setOpened={setOpened}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComunityCard;
