import { tgb } from "../../../../Assets/Images";
import {} from "../../../../Assets/Icons";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { formatNumber } from "../../../../util/numberFormat";
import { timeFormat } from "../../../../util/timeforMat";
import { CustomeFuncBox, SmCommentCard } from "../../../../Component";
const HorizonDesCmt = ({ opened, setOpened, time }) => {
  return (
    <div className='flex flex-col md:flex-row mt-[12px] gap-[12px]'>
      {/* Description */}
      <div className='flex-1 overflow-hidden bg-hover-black p-[12px] rounded-[12px] cursor-pointer text-[14px] leading-[20px]'>
        <div className='w-full mr-[8px]  font-[500] flex gap-[7px] overflow-hidden text-nowrap'>
          {/* Views */}
          <span className=''>{formatNumber(3000)} lượt xem</span>

          {/* time */}
          <span>{timeFormat(time)}</span>

          {/* hash tag */}
          <div className='text-gray-A flex gap-[3.5px] '>
            <span>#TekIt</span>
            <span>#IWatchTheMoon</span>
            <span>#Cafune</span>
            <span>#Cafune</span>
            <span>#Cafune</span>
          </div>
        </div>
        <div className='relative'>
          <span className="after:content-['...thêm']">
            The official music video for Cafuné's single 'Tek It' - from their
            album Running - available now.
          </span>
        </div>
      </div>

      {/* Comment */}
      <div
        className='flex-1 bg-hover-black hover:bg-[rgba(255,255,255,0.2)] p-[12px] text-[14px] 
        leading-[20px] rounded-[12px] cursor-pointer'
        onClick={() => setOpened("cmt")}
      >
        <div className='font-[500]'>
          <span>Bình luận</span>
          <span className='ml-[4px]'>41</span>
        </div>
        <div className='mt-[4px]'>
          <SmCommentCard
            img={tgb}
            text={"Tui muốn năng lực đọc siêu nhanh kia"}
          />
        </div>
      </div>
    </div>
  );
};
export default HorizonDesCmt;
