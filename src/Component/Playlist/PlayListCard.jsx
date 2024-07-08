import { useState, useEffect, useRef } from "react";
import {
  PlayIcon,
  PlayListIcon,
  LiveIcon,
  Setting2Icon,
  BlockIcon,
  Verification,
} from "../../Assets/Icons";
import { formatNumber } from "../../util/numberFormat";
import { timeFormat } from "../../util/timeforMat";
import CustomeFuncBox from "../Box/CustomeFuncBox";
import { useParams } from "react-router-dom";

const PlayListCard = ({ data, l2Color, l3Color, showL3, containerStyle }) => {
  const { path } = useParams();

  const containRef = useRef();

  const [showed, setShowed] = useState(false);

  const [opened, setOpened] = useState(false);

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
    <div
      className={`flex-1 cursor-pointer mx-[8px] mb-[40px] ${containerStyle}`}
      onMouseOver={() => {
        setShowed(true);
      }}
      onMouseOut={() => {
        setShowed(false);
      }}
    >
      <div className='relative w-full'>
        <img
          src={data.thumb}
          alt='thumb'
          className='w-full rounded-[12px] relative z-[3]'
        />
        {showL3 && (
          <div
            className='absolute top-[-8px]  left-[50%] 
          translate-x-[-50%] w-full-minus-24 h-full z-[1] rounded-[12px]'
            style={{
              backgroundColor: l3Color || "rgb(80,71,65)",
            }}
          ></div>
        )}
        <div
          className='absolute top-[-4px] left-[50%] 
          translate-x-[-50%] w-full-minus-16 h-full z-[2] rounded-[12px] border-t-[1px] border-black'
          style={{
            backgroundColor: l2Color || "rgb(147,129,118)",
          }}
        ></div>
        {data.type.type && data.type.type === "single" && (
          <div
            className='absolute bottom-0 right-0 mr-[8px] mb-[8px] 
          rounded-[4px] w-fit bg-[rgba(51,37,34,0.8)] z-[4] flex items-center justify-center'
          >
            <div className='mx-[4px]'>
              <PlayListIcon />
            </div>
            <span className=' text-[12px] leading-[18px] text-white mr-[4px] py-[3px]'>
              {formatNumber(data.vidQtt)} video
            </span>
          </div>
        )}
        {data.type.type && data.type.type === "multi" && (
          <div
            className='absolute bottom-0 right-0 mr-[8px] mb-[8px] 
         rounded-[4px] w-fit bg-[rgba(51,37,34,0.8)] z-[4] flex items-center justify-center'
          >
            <div className='mx-[4px]'>
              <LiveIcon />
            </div>
            <span className=' text-[12px] leading-[18px] text-white mr-[4px] py-[3px]'>
              Tuyển tập
            </span>
          </div>
        )}
        {showed && (
          <div
            className='absolute inset-0 bg-[rgba(0,0,0,0.8)] 
            z-[5] rounded-[12px] border-t-[1px] border-black flex items-center justify-center'
          >
            <PlayIcon />
            <span className='ml-[2px] text-[13px] font-[550]'>PHÁT TẤT CẢ</span>
          </div>
        )}
      </div>
      <div className='flex mt-[12px]'>
        <div className={`${!showed && " pr-[24px] mr-[16px]"} flex-1`}>
          <h4 className='text-[16px] leading-[22px] max-h-[44px] font-[500] t-ellipsis  mb-[4px]'>
            {data.title}
          </h4>
          {data.type.type && data.type.type === "multi" && (
            <h5 className=' text-[12px] leading-[18px] text-gray-A'>
              {data.compliation}
            </h5>
          )}
          {data.type.type && data.type.type === "single" && (
            <div className='text-[12px] leading-[18px] text-gray-A'>
              <div className='flex flex-wrap items-center'>
                {data.type.state && <div>{data.type.state}</div>}
                {data.channel && (
                  <div className="flex items-center">
                    <span>{data.channel.name}</span>
                    {data.channel.subs >= 100000 && (
                      <div className="ml-[4px]">
                        <Verification size={14}/>
                      </div>
                    )}
                  </div>
                )}
                {path === "playlists" && (
                  <div className="before:content-['•'] before:mx-[4px] t-1-ellipsis">
                    Danh sách phát
                  </div>
                )}
              </div>
              {data.updatedDate && (
                <div>Cập nhật {timeFormat(data.updatedDate)}</div>
              )}
              <div className='hover:text-white'>Xem toàn bộ danh sách</div>
            </div>
          )}
        </div>
        {showed && (
          <div
            className='w-[40px] h-[40px] rounded-[50%] 
            flex items-center justify-center relative mt-[-9px] active:bg-black-0.2'
            onClick={() => setOpened((prev) => !prev)}
            ref={containRef}
          >
            <Setting2Icon />
            {opened && (
              <CustomeFuncBox
                funcList1={[
                  {
                    id: 1,
                    text: "Không quan tâm",
                    icon: <BlockIcon />,
                  },
                ]}
                setOpened={setOpened}
                style={"bottom-[-150%] left-[-20%]"}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default PlayListCard;
