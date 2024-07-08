import {
  LikeIcon,
  DisLikeIcon,
  CommentIcon,
  ThickShareIcon,
  Setting2Icon,
  LoadShortImgIcon,
  PlayIcon,
  ThickAudioIcon,
  StopIcon,
  CloseIcon,
  SortIcon,
  DescriptionIcon,
  SubtitlesIcon,
  AddPLIcon,
  NoSuggetIcon,
  DiaryIcon,
  FeedBackIcon,
} from "../../../Assets/Icons";

import { short1, sangtraan, MyChannel } from "../../../Assets/Images";
import { useState, useEffect, useRef } from "react";
import { useAnimate, AnimatePresence, motion } from "framer-motion";

import { Comment, CommentInput, CustomeFuncBox } from "../../../Component";

const CustomeButton = ({ Icon, text, title, handleOnClick, showedCmt }) => {
  return (
    <div className='flex flex-col items-center w-[48px] '>
      <button
        className={`w-[48px] h-[48px] rounded-[50%] flex items-center justify-center
          ${
            showedCmt
              ? "bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(40,40,40,0.6)]"
              : "bg-hover-black hover:bg-[rgba(255,255,255,0.2)]"
          }
          `}
        title={title}
        onClick={handleOnClick}
      >
        <Icon />
      </button>
      {text && (
        <span className='mt-[4px] text-[14px] leading-[20px] cursor-default overflow-hidden t-1-ellipsis'>
          {text}
        </span>
      )}
    </div>
  );
};

const funcList = [
  {
    id: 1,
    text: "Thông tin mô tả",
    icon: <DescriptionIcon />,
  },
  {
    id: 2,
    text: "Lưu vào danh sách phát",
    icon: <AddPLIcon />,
  },
  {
    id: 3,
    text: "Phụ đề",
    icon: <SubtitlesIcon />,
  },
  {
    id: 4,
    text: "Không đề xuất kênh này",
    icon: <NoSuggetIcon />,
  },
  {
    id: 5,
    text: "Báo cáo vi phạm",
    icon: <DiaryIcon />,
  },
  {
    id: 6,
    text: "Gửi ý kiến phản hồi",
    icon: <FeedBackIcon />,
  },
];

const LargeShortVid = () => {
  const [hoverContain, setHoverContain] = useState(false);

  const [moveBtn, setMoveBtn] = useState(false);

  const [audioValue, setAudioValue] = useState(100);

  const [hoverAudio, setHoverAudio] = useState(false);

  const [showedCmt, setShowedCmt] = useState(false);

  const [showContent, setShowContent] = useState(false);

  const [opened, setOpened] = useState(false);

  const [clicked, setClicked] = useState({
    state: false,
    type: "play",
  });

  const [scope, animate] = useAnimate();

  const containRef = useRef();

  useEffect(() => {
    if (scope.current) {
      if (hoverAudio) {
        animate(
          scope.current,
          {
            width: "180px",
            backgroundColor: "rgba(40,40,40,0.6)",
          },
          {
            type: "tween",
            duration: 0.3,
          }
        );
      } else {
        animate(
          scope.current,
          {
            width: "48px",
            backgroundColor: "rgba(0,0,0,0.4)",
          },
          {
            type: "tween",
            duration: 0.3,
          }
        );
      }
    }
  }, [hoverAudio]);

  useEffect(() => {
    let timeOut;
    if (showedCmt) {
      timeOut = setTimeout(() => {
        setMoveBtn(true);
        setShowContent(true);
      }, 310);
    } else {
      setShowContent(false);
      timeOut = setTimeout(() => {
        setMoveBtn(false);
      }, 310);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [showedCmt]);

  const handleClick = () => {
    setClicked((prev) => {
      return {
        state: !prev.state,
        type: prev.type === "play" ? "stop" : "play",
      };
    });
    setTimeout(() => {
      setClicked((prev) => {
        return {
          ...prev,
          state: !prev.state,
        };
      });
    }, 400);
  };

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
    <div className='flex cursor-pointer relative'>
      <div
        className={`mt-[24px] ${
          showedCmt ? "rounded-l-[12px]" : "rounded-[12px]"
        } bg-[#ffffff] relative overflow-hidden`}
        onClick={handleClick}
        onMouseOver={() => setHoverContain(true)}
        onMouseOut={() => setHoverContain(false)}
      >
        <img
          src={short1}
          alt=''
          className='w-[20vw] min-w-[331px] min-h-[588px] h-screen-h-minus-128'
        />
        {hoverContain && (
          <div className='absolute top-0 left-0 pt-[16px] pb-[32px] px-[16px] w-full flex items-center gap-[16px]'>
            <div className=' bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(40,40,40,0.6)] rounded-[50%]'>
              <button
                className='w-[48px] h-[48px] flex items-center justify-center'
                title='Phát'
                onClick={(e) => e.stopPropagation()}
              >
                {clicked.type === "play" ? <StopIcon /> : <PlayIcon />}
              </button>
            </div>
            <div
              className='flex items-center bg-[rgba(0,0,0,0.4)] rounded-[30px] w-[48px]'
              onMouseOver={() => setHoverAudio(true)}
              onMouseOut={() => setHoverAudio(false)}
              ref={scope}
            >
              <button
                className='!w-[48px] h-[48px] flex items-center justify-center'
                title='Âm lượng'
                onClick={(e) => e.stopPropagation()}
              >
                <ThickAudioIcon />
              </button>
              <AnimatePresence>
                {hoverAudio && (
                  <motion.div
                    className='flex items-center relative'
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "calc(100% - 48px)",
                      opacity: 1,
                    }}
                    exit={{
                      width: 0,
                      opacity: 0,
                    }}
                    transition={{
                      type: "tween",
                      duration: 0.3,
                    }}
                  >
                    <input
                      type='range'
                      max={100}
                      min={0}
                      step={1}
                      className=' cursor-pointer cs-range'
                      value={audioValue}
                      onChange={(e) => setAudioValue(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
        <div
          className={`pb-[24px] pl-[16px] ${
            moveBtn ? "pr-[60px]" : "pr-[16px]"
          } absolute bottom-0 left-0 w-full text-white`}
        >
          <div className='flex items-center gap-[6px] '>
            <img
              src={sangtraan}
              alt=''
              className='w-[36px] h-[36px] rounded-[50%]'
            />
            <span className='text-[14px] leading-[20px] '>@sangtraan</span>
            <button className=' hover:bg-[rgba(255,255,255,0.2)] bg-hover-black text-[12px] leading-[32px] font-[550] px-[12px] rounded-[16px]'>
              <span>Đăng ký</span>
            </button>
          </div>
          <div className='py-[4px]'>
            <h3 className='text-[14px] leading-[20px]'>
              trung bình phụ huynh Việt Nam #sangtraan #shorts
            </h3>
          </div>
        </div>
        <AnimatePresence>
          {clicked.state && (
            <motion.div
              className='absolute w-[60px] h-[60px] bg-[rgba(0,0,0,0.5)] rounded-[50%] top-[45%] left-[44%]
            flex items-center justify-center'
              animate={{
                scale: 1.4,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                type: "tween",
              }}
            >
              {clicked.type === "play" ? <StopIcon /> : <PlayIcon />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={`h-screen-h-minus-128 min-h-[588px] px-[12px] mt-[24px] 
        flex flex-col items-center justify-end gap-[16px]
        ${moveBtn && "absolute left-[42%] translate-x-[-100%] pb-[24px]"}
        ${showedCmt && !moveBtn && "!hidden"}
        ${!showedCmt && moveBtn && "!hidden"}
        `}
      >
        <CustomeButton
          text='960 N'
          Icon={LikeIcon}
          title='Tôi thích video này'
          showedCmt={showedCmt}
        />
        <CustomeButton
          text='Không thích'
          Icon={DisLikeIcon}
          title='Tôi không thích video này'
          showedCmt={showedCmt}
        />
        <CustomeButton
          text='5.464'
          Icon={CommentIcon}
          title={"Bình luận"}
          handleOnClick={() => setShowedCmt((prev) => !prev)}
          showedCmt={showedCmt}
        />
        <CustomeButton
          text='Chia sẻ'
          Icon={ThickShareIcon}
          title={"Chia sẻ"}
          showedCmt={showedCmt}
        />
        <div className='relative' ref={containRef}>
          <CustomeButton
            Icon={Setting2Icon}
            showedCmt={showedCmt}
            handleOnClick={() => {
              setOpened((prev) => !prev);
            }}
          />
          {opened && (
            <CustomeFuncBox
              style={"w-[241px] left-0 bottom-[100%]"}
              setOpened={setOpened}
              funcList1={funcList}
            />
          )}
        </div>
        <div className='w-[40px] h-[40px] border-[1px] border-white rounded-[6px] flex items-center justify-center'>
          <LoadShortImgIcon />
        </div>
      </div>
      <AnimatePresence>
        {showedCmt && (
          <motion.div
            className='w-[450px] bg-[#1c1b1b] h-screen-h-minus-128 min-h-[588px] 
            mt-[24px] rounded-r-[12px] flex flex-col cursor-auto'
            initial={{
              width: 0,
            }}
            animate={{
              width: "450px",
              background: "#0f0f0f",
            }}
            exit={{
              width: 0,
              background: "#1c1b1b",
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {/* Header */}
            {showContent && (
              <>
                <div className='px-[16px] py-[4px] flex items-center justify-between '>
                  <div className='my-[10px] flex items-center gap-[8px]'>
                    <h4 className='text-[20px] leading-[28px] font-bold'>
                      Bình luận
                    </h4>
                    <span className=' text-gray-A'>3,1 N</span>
                  </div>
                  <div className='flex gap-[8px]'>
                    <button className='w-[40px] h-[40px] flex items-center justify-center'>
                      <SortIcon />
                    </button>
                    <button
                      className='w-[40px] h-[40px] rounded-[50%] hover:bg-[rgba(255,255,255,0.2)]
                      flex items-center justify-center'
                      onClick={() => setShowedCmt(false)}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </div>

                {/* Comment list */}
                <div className='px-[16px] flex-1 overflow-y-auto menu-scrollbar'>
                  <Comment verify={true} owner={true} reply={true} />
                  <Comment verify={true} owner={true} reply={true} />
                  <Comment verify={true} reply={true} />
                  <Comment verify={true} />
                  <Comment reply={true} />
                  <Comment />
                </div>
                <div className='p-[16px] border-t-[1px] border-[rgba(255,255,255,0.2)]'>
                  <CommentInput myChannelImg={MyChannel} />
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default LargeShortVid;
