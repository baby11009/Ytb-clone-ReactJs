import { AccountIcon } from "../../../../Assets/Icons";
import { MyChannel } from "../../../../Assets/Images";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <div className='pt-[48px] flex justify-between border-b-[1px] border-b-black-0.2'>
        <div className='pb-[24px]'>
          <div className='text-[16px] leading-[22px] font-[500] t-1-ellipsis'>
            Tài khoản
          </div>
          <div className='mt-[40px] mb-[12px] text-[24px] leading-[32px] t-ellipsis'>
            Chọn cách bạn xuất hiện và nội dung bạn muốn xem trên YouTube
          </div>
          <div className='text-[14px] leading-[20px] text-gray-A'>
            Đăng nhập bằng <span>vohuythanh2003@gmail.com</span>
          </div>
        </div>
        <div className='w-[180px] h-[180px]'>
          <AccountIcon />
        </div>
      </div>

      <div className=' border-b-[1px] border-b-black-0.2'>
        <div className='pt-[24px] pb-[8px] text-[20px] leading-[28px] font-bold t-1-ellipsis'>
          Kênh YouTube của bạn
        </div>
        <div className='text-[12px] leading-[18px] text-gray-A t-ellipsis'>
          Đây là sự hiện diện công khai của bạn trên YouTube. Bạn cần có một
          kênh để tải video của riêng mình lên, bình luận về các video hoặc tạo
          danh sách phát.
        </div>
        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Kênh của bạn
          </div>
          <div>
            <div className='pt-[4px] pb-[20px] flex items-center'>
              <Link>
                <img
                  src={MyChannel}
                  alt=''
                  className='size-[50px] rounded-[50%] mr-[20px]'
                />
              </Link>
              <div className='text-[14px] leading-[20px]'>thanh vo huy</div>
            </div>
            <div>
              <Link className='block pl-[4px] pb-[8px] text-[14px] leading-[20px] font-[500] text-blue-3E'>
                Trạng thái và tính năng của kênh
              </Link>
              <Link className='block pl-[4px] pb-[8px] text-[14px] leading-[20px] font-[500] text-blue-3E'>
                Tạo kênh mới
              </Link>
              <Link className='block pl-[4px] pb-[8px] text-[14px] leading-[20px] font-[500] text-blue-3E'>
                Xem cài đặt nâng cao
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className='pt-[24px] pb-[8px] text-[20px] leading-[28px] font-bold'>
            Tài khoản của bạn
          </div>
          <div className='text-[12px] leading-[18px] text-gray-A'>
            Bạn đăng nhập vào YouTube bằng Tài khoản Google của mình
          </div>
        </div>
        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Tài khoản Google
          </div>
          <div className='flex-1'>
            <Link className='block text-[14px] leading-[20px] font-[500] text-blue-3E'>
              Xem hoặc thay đổi các tùy chọn cài đặt cho Tài khoản Google của
              bạn
            </Link>
            <span className='text-[14px] leading-[20px] text-gray-A'>
              Bạn sẽ được chuyển đến trang Tài khoản Google của mình
            </span>
          </div>
        </div>
        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Tư cách thành viên
          </div>
          <div className='flex-1'>
            <Link className='block text-[14px] leading-[20px] font-[500] text-blue-3E'>
              Xem hoặc thay đổi các tùy chọn cài đặt cho Tài khoản Google của
              bạn
            </Link>
            <span className='text-[14px] leading-[20px] text-gray-A'>
              YouTube Premium cho phép bạn nghe nhạc không gián đoạn, xem video
              không có quảng cáo và nhiều lợi ích khác
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
