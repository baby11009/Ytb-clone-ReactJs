import { Link } from "react-router-dom";

const Billing = () => {
  return (
    <div>
      <div className='pt-[48px] flex justify-between border-b-[1px] border-b-black-0.2'>
        <div className='pb-[24px]'>
          <div className='text-[16px] leading-[22px] font-[500] t-1-ellipsis'>
            Lập hóa đơn và thanh toán
          </div>
          <div className='mt-[40px] mb-[12px] text-[24px] leading-[32px] t-ellipsis'>
            Chọn cách bạn mua hàng trên YouTube
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='py-[24px] text-[14px] leading-[20px]'>
          <div className='pb-[4px] font-[500] t-1-ellipsis'>
            Đã tắt tính năng mua nhanh.
          </div>
          <div className='text-gray-A'>
            Bạn sẽ nhận được yêu cầu xác minh tài khoản cho mọi giao dịch mua
            trên YouTube
          </div>
          <Link className='text-[14px] leading-[20px] text-blue-3E'>
            Tìm hiểu thêm về việc xác minh giao dịch mua
          </Link>
        </div>
        <div className='pl-[24px] flex items-center'>
          <button
            className='px-[16px] w-[120px] flex justify-center border-[1px] border-black-0.2 rounded-[18px] 
            text-[14px] font-[500] leading-[36px] text-blue-3E hover:bg-[#263850] hover:border-transparent'
          >
            Bật
          </button>
        </div>
      </div>
    </div>
  );
};
export default Billing;
