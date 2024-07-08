import {
  PlayIcon,
  Setting2Icon,
  DownloadIcon,
  PlusIcon,
  RandomIcon,
  CircleMinusIcon,
  EyeIcon,
  SortIcon,
  EqualIcon,
} from "../../../Assets/Icons";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { timeFormat } from "../../../util/timeforMat";
import { formatNumber } from "../../../util/numberFormat";
import { CustomeFuncBox, VideoCard2 } from "../../../Component";
import { playListWL, playlistLv } from "../../../Mock Data/playlistData";

const funcList = [
  {
    id: 1,
    text: "Hiện những video không xem được",
    icon: <EyeIcon />,
  },
  {
    id: 2,
    text: "Thêm video",
    icon: <PlusIcon />,
  },
  {
    id: 3,
    text: "Xóa video đã xem",
    icon: <CircleMinusIcon />,
  },
];

const btnList = [
  {
    id: 1,
    title: "Tất cả",
  },
  {
    id: 2,
    title: "Video",
  },
  {
    id: 3,
    title: "Video ngắn",
  },
];

const PlaylistPart = ({ id }) => {
  const containerRef = useRef();

  const dragItem = useRef(0);

  const dragOverItem = useRef(0);

  const [noDrag, setNoDrag] = useState(false);

  const [playList, setPlaylist] = useState(undefined);

  const [data, setData] = useState(undefined);

  const [showed, setShowed] = useState(false);

  const [opened, setOpened] = useState(false);

  const [activeId, setActiveId] = useState(1);

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

  useLayoutEffect(() => {
    if (playList) {
      setData(playList?.vidList);
    }
  }, [playList]);

  useLayoutEffect(() => {
    switch (id) {
      case "wl":
        setPlaylist(playListWL);
        setNoDrag(false);
        break;
      case "lv":
        setPlaylist(playlistLv);
        setNoDrag(true);
        break;
      default:
        setPlaylist(playListWL);
        setNoDrag(false);
    }
  }, [id]);

  const handleSort = () => {
    let list = [...data];

    let temp;

    if (dragItem.current !== dragOverItem.current && !noDrag) {
      temp = list[dragItem.current];

      list[dragItem.current] = list[dragOverItem.current];

      list[dragOverItem.current] = temp;

      setData(list);
    }
  };

  if (!playList) {
    return "loading";
  }

  return (
    <div className='flex justify-center pt-[24px]'>
      <div className='relative w-full'>
        {/* Left side */}
        <div
          className=' lg:fixed w-full lg:w-[360px] lg:min-h-[85.5vh] lg:mb-[24px] lg:ml-[24px] rounded-[16px] '
          style={{
            background: playList?.linearBg,
          }}
        >
          <div className='p-[24px]'>
            <div className='flex flex-col sm:flex-row sm:items-center lg:flex-col lg:items-start'>
              <Link className='inline-block w-full flex-1'>
                <div
                  className='relative rounded-[12px] overflow-hidden cursor-pointer mb-[16px]'
                  onMouseOver={() => {
                    setShowed(true);
                  }}
                  onMouseOut={() => {
                    setShowed(false);
                  }}
                >
                  {data && (
                    <img
                      src={data[0]?.thumb}
                      alt='thumb image'
                      className='w-full h-full '
                    />
                  )}
                  {showed && (
                    <div className='absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.8)] '>
                      <div>
                        <PlayIcon />
                      </div>
                      <span className='ml-[2px] text-[12px] font-[500]'>
                        PHÁT TẤT CẢ
                      </span>
                    </div>
                  )}
                </div>
              </Link>

              <div className='sm:ml-[24px] lg:ml-0 flex-1'>
                <div className='text-[28px] leading-[38px] font-bold t-ellipsis'>
                  {playList?.name}
                </div>

                <div className='flex flex-col sm:flex-row lg:flex-col'>
                  <div className='mt-[16px] mb-[12px] flex-1'>
                    <Link className='inline-block text-[14px] leading-[20px] font-[500] mb-[4px]'>
                      {playList?.channel?.name}
                    </Link>
                    <div
                      className='flex flex-wrap items-center gap-[4px]
                    text-[12px] leading-[18px] text-white-FB3 text-nowrap'
                    >
                      <span>{formatNumber(data?.length)} video</span>
                      <span>{formatNumber(playList?.view)} lượt xem</span>
                      <span>Cập nhật {timeFormat(playList?.lastUpdated)}</span>
                    </div>
                  </div>

                  <div className='flex items-center gap-[8px]'>
                    <button
                      className='size-[36px] rounded-[50%] bg-black-0.1 hover:bg-black-0.2 
                      flex items-center justify-center'
                    >
                      <DownloadIcon />
                    </button>
                    <div className='relative' ref={containerRef}>
                      <button
                        className='size-[36px] rounded-[50%] bg-black-0.1 hover:bg-black-0.2 
                        flex items-center justify-center'
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          setOpened((prev) => !prev);
                        }}
                      >
                        <Setting2Icon />
                        {opened && (
                          <CustomeFuncBox
                            funcList1={funcList}
                            style={"left-0 top-[100%]"}
                            setOpened={setOpened}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-[16px] flex flex-col xsm:flex-row xsm:items-center gap-[8px]'>
              <button
                className='flex-1 flex items-center justify-center px-[16px]
               bg-[#fff] hover:bg-[#e6e6e6] rounded-[18px]'
              >
                <div className='ml-[-6px] mr-[6px]'>
                  <PlayIcon color={"#212121"} />
                </div>
                <span className='text-[#212121] text-[14px] leading-[36px] font-[500]'>
                  Phát tất cả
                </span>
              </button>
              <button
                className='flex-1 flex items-center justify-center px-[16px]
               bg-black-0.1 hover:bg-black-0.2 rounded-[18px]'
              >
                <div className='ml-[-6px] mr-[6px]'>
                  <RandomIcon />
                </div>
                <span className='text-[14px] leading-[36px] font-[500]'>
                  Trộn bài
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='mr-[24px] lg:pl-[388px]'>
          <div
            className='pl-[36px] mt-[8px]  flex items-center text-[14px] 
          leading-[20px] tracking-[0.5px] font-[500] text-nowrap overflow-x-auto'
          >
            <div className='pr-[16px] mr-[8px] border-r-[1px] border-black-0.2'>
              <button className='flex items-center gap-[8px] leading-[22px]'>
                <div>
                  <SortIcon />
                </div>
                <span>Sắp xếp</span>
              </button>
            </div>
            <div className='flex items-center text-[14px] leading-[32px] font-[500]'>
              {btnList.map((item) => (
                <button
                  className={`my-[12px] mr-[12px] px-[12px] rounded-[8px]  transition-colors ease-out duration-300
                    ${
                      activeId === item.id
                        ? "bg-white-F1 hover:bg-white text-black"
                        : "bg-black-0.1 hover:bg-black-0.2"
                    }
                  `}
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            {data?.map((item, index) => {
              if (item.type.title !== "playlist") {
                return (
                  <div
                    className='flex items-center hover:bg-black-0.1 rounded-[12px] cursor-grabbing'
                    key={index}
                    draggable={noDrag}
                    onDragStart={() => {
                      if (!noDrag) {
                        dragItem.current = index;
                      }
                    }}
                    onDragEnter={() => {
                      if (!noDrag) {
                        dragOverItem.current = index;
                      }
                    }}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <div
                      className={`w-[36px] flex items-center justify-center ${
                        noDrag &&
                        "text-[14px] leading-[20px] font-[500px] text-gray-A"
                      }`}
                    >
                      {noDrag ? index + 1 : <EqualIcon />}
                    </div>
                    <VideoCard2 data={item} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaylistPart;
