import { llstylish, emoji1, sangtraan, MyChannel } from "../../Assets/Images";
import {
  EmptyLikeIcon,
  LoveIcon,
  ThinArrowIcon,
  Setting2Icon,
  Verification,
  ThickLikeIcon,
} from "../../Assets/Icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import InputBox from "./InputBox";

const CommentCard = ({ reply, owner, verify, showReply, setShowReply, imgSize }) => {
  const [toggle, setToggle] = useState("");

  const [showedInput, setShowedInput] = useState(false);

  const handleOnClick = () => {
    setShowedInput((prev) => !prev);
  };

  return (
    <div className='flex mb-[16px]'>
      <Link className='mr-[12px]' to={`/channel/${5}`}>
        <img
          src={llstylish}
          alt=''
          className={`${imgSize || '!size-[24px]'} rounded-[50%]`}
        />
      </Link>
      <div className='flex-1'>
        {/* user in4 */}
        <div className='flex items-center justify-between pb-[2px] bg-['>
          <div className='flex gap-[4px]'>
            <Link className='flex items-center gap-[4px]' to={`/channel/${5}`}>
              <h3
                className={`text-[13px] leading-[20px] ${
                  owner && "bg-[#888888] px-[6px] rounded-[12px]"
                }`}
              >
                @stylish_21
              </h3>
              {verify && (
                <div>
                  <Verification size={"12"} color={"#ffffff"} />
                </div>
              )}
            </Link>
            <Link>
              <span className='text-[12px] leading-[20px] text-gray-A hover:text-white-F1'>
                6 tháng trước
              </span>
            </Link>
          </div>
        </div>

        {/* content */}
        <div className='text-[14px] leading-[20px]'>
          <span>“Feels like chalk, smells like fruit loops” I’m sold.</span>
          <img
            src={emoji1}
            alt='emoji'
            width={16}
            height={16}
            className='mx-[2px]'
          />
        </div>

        {/* func section */}
        <div className='mt-[4px] ml-[-8px] flex'>
          {/* Like */}
          <div className='flex items-center mr-[8px]'>
            <button
              className='w-[32px] h-[32px] rounded-[50%] flex items-center justify-center
             hover:bg-[rgba(255,255,255,0.2)]'
              onClick={() => {
                setToggle((prev) => (prev === "like" ? "" : "like"));
              }}
            >
              {toggle === "like" ? <ThickLikeIcon /> : <EmptyLikeIcon />}
            </button>
            <span className='text-[12px] leading-[18px] text-gray-A translate-y-[15%] hidden xsm:inline-block'>
              118 N
            </span>
          </div>

          {/* Dislike */}
          <button
            className='w-[32px] h-[32px] rounded-[50%] rotate-180 flex items-center 
          justify-center hover:bg-[rgba(255,255,255,0.2)]'
            onClick={() => {
              setToggle((prev) => (prev === "dislike" ? "" : "dislike"));
            }}
          >
            {toggle === "dislike" ? <ThickLikeIcon /> : <EmptyLikeIcon />}
          </button>

          {/* channel Like */}
          <div className='w-[36px] h-[36px] flex items-center justify-center relative'>
            <img
              src={sangtraan}
              alt='channel image'
              className='w-[14px] h-[14px] rounded-[50%]'
            />
            <div className='w-[15px] h-[15px] absolute bottom-[15%] right-[9%]'>
              <LoveIcon />
            </div>
          </div>

          {/* Reply */}
          <button
            className='ml-[8px] h-[32px] rounded-[20px] px-[10px] text-[13px]
           flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] text-nowrap'
            onClick={handleOnClick}
          >
            Phản hồi
          </button>
        </div>

        {showedInput && (
          <InputBox
            myChannelImg={MyChannel}
            imgSize={"w-[24px] h-[24px]"}
            showEmoji={true}
            handleOnClick={handleOnClick}
          />
        )}

        {/* Reply comment */}
        {reply && (
          <button
            className='flex items-center gap-[6px] rounded-[30px] px-[16px] hover:bg-[#263850]'
            onClick={() => setShowReply((prev) => !prev)}
          >
            <div
              className={`${
                showReply ? "rotate-[-90deg]" : "rotate-90"
              }  flex items-center`}
            >
              <ThinArrowIcon color={"#3EA6FF"} />
            </div>
            <span className='text-[14px] leading-[36px] text-blue-3E'>
              11 phản hồi
            </span>
          </button>
        )}
      </div>

      {/* reply cmt list*/}

      <details className='relative'>
        <motion.summary
          className='cursor-pointer w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'
          whileTap={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <Setting2Icon />
        </motion.summary>
      </details>
    </div>
  );
};
export default CommentCard;
