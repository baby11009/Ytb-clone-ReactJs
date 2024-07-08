import { useState } from "react";
import InputBox from "./InputBox";


const CommentInput = ({ myChannelImg, showEmoji, imgSize }) => {

  const [showedInput, setShowedInput] = useState(false);

  const handleOnClick = () => {
    setShowedInput(false)
  }

  return (
    <>
      {!showedInput ? (
        <div
          className='w-full flex items-center gap-[12px] cursor-text'
          onClick={() => {
            setShowedInput(true);
          }}
        >
          <div>
            <img
              src={myChannelImg}
              alt=''
              className={`${imgSize || 'size-[24px]'} rounded-[50%] bg-white`}
            />
          </div>
          <div className='flex-1'>
            <div className='text-[14px] leading-[20px] text-gray-A border-b-[1px] border-[rgba(255,255,255,0.2)] pb-[4px]'>
              Viết bình luận...
            </div>
          </div>
        </div>
      ) : (
        <InputBox handleOnClick={handleOnClick} myChannelImg={myChannelImg} showEmoji={showEmoji}/>
      )}
    </>
  );
};
export default CommentInput;
