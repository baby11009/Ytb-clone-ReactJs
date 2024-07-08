import { Link } from "react-router-dom";
import { MyChannel } from "../../../../Assets/Images";
import { formatNumber } from "../../../../util/numberFormat";
import { useState, useRef, useEffect } from "react";
import {
  BellIcon,
  ThinArrowIcon,
  EmptyLikeIcon,
  ShareIcon,
  Setting2Icon,
  DonationIcon,
  Verification,
  ThickBellIcon,
  SlashBellIcon,
  UnSubIcon,
  DownloadIcon,
  CutIcon,
  SaveIcon,
  DiaryIcon,
} from "../../../../Assets/Icons";
import { CustomeFuncBox } from "../../../../Component";

const HorizonVidInfor = ({ opened, setOpened, subbed, setSubbed }) => {
  const funcList1 = [
    {
      id: 1,
      text: "Chia sẻ",
      icon: <ShareIcon />,
    },
    {
      id: 2,
      text: "Tải xuống",
      icon: <DownloadIcon />,
    },
    {
      id: 3,
      text: "Cảm ơn",
      icon: <DonationIcon />,
    },
    {
      id: 4,
      text: "Tạo đoạn video",
      icon: <CutIcon />,
    },
    {
      id: 5,
      text: "Lưu",
      icon: <SaveIcon />,
    },
    {
      id: 6,
      text: "Báo vi phạm",
      icon: <DiaryIcon />,
    },
  ];
  const funcList2 = [
    {
      id: 1,
      text: "Tất cả",
      icon: <ThickBellIcon />,
      handleOnClick: (data) => {
        setNotiMod({
          id: data.id,
          icon: data.icon,
        });
      },
    },
    {
      id: 2,
      text: "Dành riêng cho bạn",
      icon: <BellIcon />,
      handleOnClick: (data) => {
        setNotiMod({
          id: data.id,
          icon: data.icon,
        });
      },
    },
    {
      id: 3,
      text: "Không nhận thông báo",
      icon: <SlashBellIcon />,
      handleOnClick: (data) => {
        setNotiMod({
          id: data.id,
          icon: data.icon,
        });
      },
    },
    {
      id: 4,
      text: "Hủy đăng ký",
      icon: <UnSubIcon />,
      handleOnClick: (icon) => {
        setSubbed(false);
      },
    },
  ];

  const boxRef = useRef();

  const [notiMod, setNotiMod] = useState({
    id: 3,
    icon: <BellIcon />,
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpened("");
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className='text-[28px] leading-[38px] font-bold t-ellipsis'>
        Cafuné - Tek It (I Watch The Moon) [Official Video] Cafuné - Tek It (I
        Watch The Moon) [Official Video]
      </div>
      <div className='flex flex-col md:flex-row md:items-center justify-between '>
        {/* Left */}
        <div className='flex items-center mt-[12px]'>
          <Link>
            <img
              src={MyChannel}
              alt=''
              className='w-[40px] h-[40px] rounded-[50%] mr-[12px]'
            />
          </Link>
          <div className='flex flex-col mr-[24px]'>
            <div className='flex items-center gap-[4px]' title='Thầy Giáo Ba'>
              <Link className='text-[16px] leading-[22px] font-[500] t-1-ellipsis'>
                Thầy Giáo Ba
              </Link>
              <Verification size={"14"} />
            </div>
            <span className='text-[12px] !leading-[18px] text-gray-A t-1-ellipsis'>
              {formatNumber(334000)} người đăng ký
            </span>
          </div>

          <button
            className='px-[16px] text-[14px] leading-[36px] text-black font-[500] bg-white 
              hover:bg-[#d9d9d9] rounded-[18px] mr-[8px]'
          >
            Tham gia
          </button>

          <button
            className={`px-[16px] h-[36px] rounded-[18px] flex items-center relative
                
                    ${
                      subbed
                        ? "bg-hover-black hover:bg-[rgba(255,255,255,0.2)]"
                        : "bg-[#ffffff] text-black"
                    }`}
            onClick={(e) => {
              e.stopPropagation();
              if (!subbed) {
                setSubbed(true);
                setNotiMod({
                  id: 3,
                  icon: <BellIcon />,
                });
              } else {
                setOpened((prev) => (prev === "sub" ? "" : "sub"));
              }
            }}
            ref={opened === "sub" ? boxRef : undefined}
          >
            {subbed && <div className='ml-[-6px] mr-[6px]'>{notiMod.icon}</div>}

            <span className='text-[14px] leading-[36px] font-[500]'>
              {subbed ? "Đã đăng ký" : "Đăng ký"}
            </span>

            {subbed && (
              <div className='rotate-90 ml-[6px] mr-[-6px]  w-[24px] h-[24px] flex items-center justify-center'>
                <ThinArrowIcon />
              </div>
            )}

            {opened === "sub" && (
              <CustomeFuncBox
                style={"left-0 top-[101%]"}
                setOpened={setOpened}
                funcList1={funcList2}
                currentId={notiMod.id}
              />
            )}
          </button>
        </div>

        {/* Right */}
        <div className='flex mt-[12px]'>
          <div className='flex items-center'>
            <div
              className='rounded-l-[18px] h-[36px] flex items-center gap-[6px] relative
              bg-hover-black hover:bg-[rgba(255,255,255,0.2)] pl-[10px] pr-[16px] cursor-pointer
                after:content-[""] after:w-[1px] after:h-[24px] after:bg-[rgba(255,255,255,0.2)]
                after:absolute after:right-0
         '
            >
              <EmptyLikeIcon />

              <span className='text-[14px] leading-[36px] t-1-ellipsis'>
                {formatNumber(30000)}
              </span>
            </div>

            <div
              className='rounded-r-[18px] h-[36px] flex items-center 
            bg-hover-black hover:bg-[rgba(255,255,255,0.2)] px-[16px] cursor-pointer'
            >
              <div className='rotate-180'>
                <EmptyLikeIcon />
              </div>
            </div>
          </div>
          <div className='flex gap-[8px] ml-[8px]'>
            <div
              className='h-[36px] flex items-center justify-center rounded-[18px]
              bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer px-[16px]'
              title='Chia sẻ'
            >
              <div className='ml-[-6px] mr-[6px]'>
                <ShareIcon />
              </div>
              <span className='text-[14px] text-nowrap'>Chia sẻ</span>
            </div>
            <div
              className='h-[36px] flex md:hidden 2md:flex items-center justify-center rounded-[18px]
              bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer px-[16px] '
              title='Tải xuống'
            >
              <div className='ml-[-6px] mr-[6px]'>
                <DownloadIcon />
              </div>
              <span className='text-[14px] text-nowrap'>Tải xuống</span>
            </div>
            <div
              className='h-[36px] hidden 2xsm:flex md:hidden items-center justify-center rounded-[18px]
              bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer px-[16px] '
              title='Tải xuống'
            >
              <div className='ml-[-6px] mr-[6px]'>
                <DonationIcon />
              </div>
              <span className='text-[14px] text-nowrap'>Cảm ơn</span>
            </div>
            <div
              className='w-[36px] h-[36px] flex items-center justify-center rounded-[50%]
         bg-hover-black hover:bg-[rgba(255,255,255,0.2)] cursor-pointer relative'
              ref={opened === 'setting' ? boxRef : undefined}
              onClick={(e) => {
                e.stopPropagation();
                setOpened((prev) => (prev === "setting" ? "" : "setting"));
              }}
            >
              <Setting2Icon />
              {opened === "setting" && (
                <CustomeFuncBox
                  style={"right-0 bottom-[110%]"}
                  setOpened={setOpened}
                  funcList1={funcList1}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HorizonVidInfor;
