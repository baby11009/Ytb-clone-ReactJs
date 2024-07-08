import { iloda_v1 } from "../../../../../Assets/Images";
import { VideoCard } from "../../../../../Component";
import { useState, useEffect, useRef } from "react";
import { IsTop, IsEnd } from "../../../../../util/scrollPosition";

const firstVid = {
  id: 1,
  thumb: iloda_v1,
  type: "video",
  title:
    "Tôi biến VÙNG ĐẤT HOANG thành VƯƠNG QUỐC TRUNG CỔ THỊNH VƯỢNG mỗi tội ... (Manor Lords #1)",
  channel: "iLoda",
  verify: true,
  view: 133000,
  time: "04/15/2024, 12:25:32 AM",
  desc: "➥ Đăng ký kênh để xem thêm Video mỗi ngày: https://bom.to/2ylFGlf ➥ Lịch Live: 2 ca Stream mỗi ngày:- Ca 1: 12h - 15h30- Ca 2: 22h - 3h30 Các buổi Stream sẽ bắt...",
};

const ChannelSearch = ({ searchValue }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isEnd, setIsEnd] = useState(false);

  const [isTop, setIsTop] = useState(true);

  const [cardQtt, setCardQtt] = useState(4);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      IsEnd(setIsEnd);
      IsTop(setIsTop);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        IsEnd(setIsEnd);
        IsTop(setIsTop);
      });
    };
  }, []);

  useEffect(() => {
    let timeOut;

    if (isEnd) {
      setIsLoading(true);
      timeOut = setTimeout(() => {
        setCardQtt((prev) => prev + 2);
        setIsLoading(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [isEnd]);

  useEffect(() => {
    if (isTop) {
      setCardQtt(4);
    }
  }, [isTop]);

  return (
    <div>
      <div className='py-[24px] border-b-[1px] border-black-0.2 overflow-hidden mr-[-32px] xsm:mr-0'>
        <div className='w-[862px]'>
          <VideoCard
            data={firstVid}
            showBtn={true}
            noFunc2={true}
            style={"flex gap-[16px] mx-0 mb-0"}
            thumbStyle={"w-[246px] h-[138px] mb-0 rounded-[8px]"}
            titleStyle={"text-[18px] leading-[26px] font-[400] max-h-[56px]"}
            infoStyle={"flex text-[12px] leading-[18px]"}
          />
        </div>
      </div>
      {[...Array(cardQtt)].map((_,index) => (
        <div
          className='py-[24px] border-b-[1px] border-black-0.2 overflow-hidden mr-[-32px] xsm:mr-0'
          key={index}
        >
          <div className='w-[862px]'>
            <VideoCard
              data={firstVid}
              showBtn={true}
              noFunc2={true}
              style={"flex gap-[16px] mx-0 mb-0"}
              thumbStyle={"w-[246px] h-[138px] mb-0 rounded-[8px]"}
              titleStyle={"text-[18px] leading-[26px] font-[400] max-h-[56px]"}
              infoStyle={"flex text-[12px] leading-[18px]"}
            />
          </div>
        </div>
      ))}
      {isLoading && (
        <div className='mt-[20px] mb-[40px] flex items-center justify-center'>
          <div
            className='w-[40px] h-[40px] rounded-[50px] border-[3px] border-[rgba(255,255,255,0.4)] 
        border-b-[transparent] border-l-[transparent] animate-spin'
          ></div>
        </div>
      )}
    </div>
  );
};
export default ChannelSearch;
