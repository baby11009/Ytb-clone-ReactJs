import { Link } from "react-router-dom";
import { formatNumber } from "../../util/numberFormat";

const VideoCard3 = ({ data, containerStyle, layoutColor }) => {
  return (
    <Link className={`inline-flex ${containerStyle}`}>
      {data && (
        <>
          <div className='relative mt-[8px]'>
            <img
              src={data?.thumb}
              alt=''
              className='size-[118px] rounded-[8px] z-[10] relative'
            />
            <div
              className={`${
                layoutColor || "bg-[#606060]"
              } w-full-minus-16 h-full 
            absolute top-[-4px] left-[8px] right-[8px] rounded-[4px] z-[5]`}
            ></div>
          </div>
          <div className='flex-1 m-[8px] flex flex-col'>
            <h3 className='mb-[8px] text-[18px] leading-[26px] font-bold t-ellipsis'>
              {data?.name}
            </h3>
            <div className='flex-1'>
              <span className='text-[12px] leading-[18px] text-gray-A t-ellipsis'>
                {data?.desc}
              </span>
            </div>
            <span className='text-[12px] leading-[18px] text-gray-A t-1-ellipsis'>
              {formatNumber(data?.vidQtt)} bản nhạc
            </span>
          </div>
        </>
      )}
    </Link>
  );
};
export default VideoCard3;
