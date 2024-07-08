import { cannot_watch_img } from "../../Assets/Images";
import { Link } from "react-router-dom";


const CannotWatch = () => {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={cannot_watch_img}
        alt='error image'
        className='w-full h-full max-w-[278px] max-h-[161px]'
      />
      <div className='my-[24px]'>
        <span className='mt-[16px] text-[14px] leading-[20px]'>
          Trang này hiện không xem được.
        </span>
      </div>
      <div className='pb-[8px]'>
        <Link
          className='inline-block mb-[8px] px-[16px] text-[14px] leading-[36px] font-[500]
         rounded-[18px] bg-black-0.1 hover:bg-black-0.2'
          to={"/"}
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};
export default CannotWatch;
