import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";

const Comment = ({ verify, owner, reply, imgSize }) => {
  const [showReply, setShowReply] = useState(false);

  const [isLoad, setIsLoad] = useState(false);

  const rplL = Array.from({ length: 5 }, (_, id) => id + 1);

  useEffect(() => {
    let timeOut;
    if (showReply) {
      setIsLoad(true);
      timeOut = setTimeout(() => {
        setIsLoad(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [showReply]);

  return (
    <div>
      <CommentCard
        verify={verify}
        owner={owner}
        reply={reply}
        showReply={showReply}
        setShowReply={setShowReply}
        imgSize={imgSize}
      />
      {showReply && (
        <div
          className={`pl-[36px] ${isLoad && "flex justify-center mb-[16px]"} `}
        >
          {!isLoad ? (
            rplL.map((item) => <CommentCard key={item} />)
          ) : (
            <div
              className='w-[30px] h-[30px] rounded-[50%] border-[3.5px] border-b-[transparent] 
            border-r-[transparent] border-[#717171] animate-spin'
            ></div>
          )}
        </div>
      )}
    </div>
  );
};
export default Comment;
