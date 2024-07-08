import { SortIcon } from "../../../../Assets/Icons";
import { CustomeFuncBox, CommentInput, Comment } from "../../../../Component";
import { useState, useRef, useEffect } from "react";
import { MyChannel } from "../../../../Assets/Images";

const funcList = [
  {
    id: 1,
    text: "Bình luận hàng đầu",
  },
  {
    id: 2,
    text: "Mới nhất xếp trước",
  },
];

const CommentSection = () => {
  const [opened, setOpened] = useState(false);

  const containerRef = useRef();

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
    <div>
      {/* Header */}
      <div className='my-[24px]'>
        <div className='text-[16px] leading-[22px] flex items-center gap-[32px] mb-[12px]'>
          <div>Bình luận {19}</div>
          <div
            className='relative cursor-pointer'
            title='Sắp xếp bình luận'
            onClick={(e) => {
              setOpened((prev) => !prev);
              e.stopPropagation();
            }}
            ref={containerRef}
          >
            <div className='flex items-center gap-[8px]'>
              <SortIcon />
              <span className='font-bold'>Sắp xếp theo</span>
            </div>
            {opened && (
              <CustomeFuncBox
                style={"w-[156px] left-0 top-[150%]"}
                setOpened={setOpened}
                funcList1={funcList}
              />
            )}
          </div>
        </div>
        <CommentInput myChannelImg={MyChannel} showEmoji={true} />
      </div>
      {/* Cmt List */}
      <div>
        <Comment verify={true} owner={true} reply={true} />
        <Comment verify={true} owner={true} reply={true} />
        <Comment verify={true} reply={true} />
        <Comment verify={true} />
        <Comment reply={true} />
        <Comment />
      </div>
    </div>
  );
};
export default CommentSection;
