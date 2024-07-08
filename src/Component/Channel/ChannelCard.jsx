import { Link } from "react-router-dom";
import { formatNumber } from "../../util/numberFormat";
import CustomeFuncBox from "../Box/CustomeFuncBox";
import { useState, useRef, useEffect } from "react";
import {
  BellIcon,
  ThickBellIcon,
  SlashBellIcon,
  UnSubIcon,
  ThinArrowIcon,
} from "../../Assets/Icons";

const ChannelCard = ({ data }) => {
  const boxRef = useRef();

  const [subbed, setSubbed] = useState(data.subbed);

  const [opened, setOpened] = useState(false);

  const [notiMod, setNotiMod] = useState({
    id: 3,
    icon: <BellIcon />,
  });

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
    <div className='w-full flex flex-col sm:gap-0 sm:flex-row items-center mt-[24px]'>
      <Link className='flex-1 max-w-[500px] min-w-[240px] flex justify-center mr-[16px]'>
        <img src={data.img} alt='' className='size-[136px] rounded-[50%]' />
      </Link>
      <div className='flex-1 flex justify-between items-center'>
        <div className='flex flex-col items-center sm:items-start text-[12px] leading-[18px] text-gray-A pr-0  sm:pr-[16px]'>
          <h3 className='text-[18px] leading-[26px] text-white-F1 t-ellipsis mb-[8px]'>
            {data.name}
          </h3>
          <div className='flex items-center flex-wrap mb-[4px]'>
            {data.tag !== "" && <span>{data.tag}</span>}
            <span className="before:content-['•'] before:mx-[4px]">
              {formatNumber(data.subs)} người đăng ký
            </span>
            {data.tag === "" && (
              <span className="before:content-['•'] before:mx-[4px]">
                {formatNumber(data?.vids)} video
              </span>
            )}
          </div>
          {data.desc !== "" && <p className='t-ellipsis'>{data.desc}</p>}
        </div>

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
              setOpened((prev) => !prev);
            }
          }}
          ref={boxRef}
        >
          {subbed && <div className='ml-[-6px] mr-[6px]'>{notiMod.icon}</div>}

          <span className='text-[14px] leading-[36px] font-[500] text-nowrap'>
            {subbed ? "Đã đăng ký" : "Đăng ký"}
          </span>

          {subbed && (
            <div className='rotate-90 ml-[6px] mr-[-6px] w-[24px] h-[24px] flex items-center justify-center'>
              <ThinArrowIcon />
            </div>
          )}

          {opened && (
            <CustomeFuncBox
              style={"left-[-25%] sm:left-[-55%] xl:left-0 top-[101.5%] w-[225px]"}
              setOpened={setOpened}
              funcList1={funcList2}
              currentId={notiMod.id}
            />
          )}
        </button>
      </div>
    </div>
  );
};
export default ChannelCard;
