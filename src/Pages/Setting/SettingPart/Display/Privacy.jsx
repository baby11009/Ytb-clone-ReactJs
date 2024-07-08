import { Link } from "react-router-dom";
import { PrivacyIcon } from "../../../../Assets/Icons";
import { CustomeBox } from "./Component/Component";

const Privacy = () => {
  return (
    <div>
      <div className='pt-[48px] flex justify-between border-b-[1px] border-b-black-0.2'>
        <div className='pb-[24px]'>
          <div className='text-[16px] leading-[22px] font-[500] t-1-ellipsis'>
            Quyền riêng tư
          </div>
          <div className='mt-[40px] mb-[12px] text-[24px] leading-[32px] t-ellipsis'>
            Quản lý nội dung mà bạn chia sẻ trên YouTube
          </div>
          <div className='text-[14px] leading-[20px] text-gray-A'>
            <span>Chọn người có thể xem kênh đăng ký của bạn</span>
            <div>
              <span>Xem xét </span>
              <Link className='text-[14px] leading-[20px] text-blue-3E'>
                Điều khoản dịch vụ của YouTube
              </Link>
              <span> và </span>
              <Link className='text-[14px] leading-[20px] text-blue-3E'>
                Chính sách quyền riêng tư của Google
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[180px] h-[180px]'>
          <PrivacyIcon />
        </div>
      </div>

      <div className='mt-[24px]'>
        <div className='py-[20px] mb-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Kênh đăng ký
          </div>
          <div className='flex-1'>
            <CustomeBox
              data={{
                id: 1,
                title: "Đặt tất cả các kênh đăng ký của tôi ở chế độ riêng tư",
                desc: "Người khác sẽ không thể thấy danh sách kênh đăng ký của bạn, trừ phi bạn dùng những tính năng khiến danh sách này xuất hiện công khai.",
                link: "Tìm hiểu thêm",
                desc2:
                  " về các tính năng khiến danh sách kênh đăng ký xuất hiện công khai hoặc tìm hiểu cách quản lý danh sách kênh đăng ký",
                link2: "Tại đây",
              }}
            />
          </div>
        </div>

        <div className='py-[20px] mb-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Quảng cáo trên YouTube
          </div>
          <div className='flex-1'>
            <div className='text-[14px] leading-[20px]'>
              <span className='text-gray-A'>
                Bạn có thể thấy quảng cáo trên YouTube dựa trên các yếu tố
                chung, chẳng hạn như chủ đề video. Các quảng cáo mà bạn nhìn
                thấy cũng có thể dựa trên những lựa chọn của bạn trong
              </span>
              &nbsp;
              <Link className='text-blue-3E'>Trung tâm quảng cáo của tôi.</Link>
              &nbsp;
              <span className='text-gray-A'>
                Để tìm hiểu thêm về cách quảng cáo hoạt động trên tài khoản gia
                đình có trẻ em, hãy truy cập vào
              </span>
              &nbsp;
              <Link className='text-blue-3E'>
                Trung tâm trợ giúp của Google cho Gia đình.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
