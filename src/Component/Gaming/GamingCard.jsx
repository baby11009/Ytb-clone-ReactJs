import { Link } from "react-router-dom";
import { formatNumber } from "../../util/numberFormat";

const GamingCard = ({ cStyle, data }) => {
  if (!data) {
    return "Loading...";
  }

  return (
    <Link className={`${cStyle} inline-block mb-[24px]`}>
      <div className='w-[210px] h-[290px] rounded-[8px] overflow-hidden'>
        <img src={data.thumb} alt='thumb' className="size-[100%]" />
      </div>
      <div className='mt-[8px] mb-[4px] text-[14px] leading-[20px] font-[500] t-ellipsis'>
        {data.name}
      </div>
      <div className='text-[12px] leading-[18px] text-gray-A t-1-ellipsis'>
        <span>{formatNumber(data.currView)}</span>
        <span> người đang xem trên toàn thế giới</span>
      </div>
    </Link>
  );
};
export default GamingCard;
