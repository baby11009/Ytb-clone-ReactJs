import { CustomeRadioBox } from "./Component/Component";
import { useState } from "react";

const radioList = [
  {
    id: 1,
    desc: "Hỏi mỗi lần tải xuống",
  },
  {
    id: 2,
    desc: "Chuẩn (480p)",
  },
  {
    id: 3,
    desc: "Thấp (144p)",
  },
];

const Download = () => {
  const [checked, setChecked] = useState(1);

  return (
    <div>
      <div className='pt-[48px] flex justify-between border-b-[1px] border-b-black-0.2'>
        <div className='pb-[24px]'>
          <div className='text-[16px] leading-[22px] font-[500] t-1-ellipsis'>
            Nội dung tải xuống
          </div>
          <div className='mt-[40px] mb-[12px] text-[24px] leading-[32px] t-ellipsis'>
            Kiểm soát các tùy chọn tải nội dung xuống
          </div>
          <div className='text-[14px] leading-[20px] text-gray-A'>
            Các tùy chọn tải nội dung xuống chỉ áp dụng cho trình duyệt này
          </div>
        </div>
      </div>

      <div className='mt-[20px]'>
        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Chất lượng tải xuống
          </div>
          <div className='flex-1'>
            {radioList.map((item, id) => (
              <div className='pt-[8px] pb-[12px]' key={id}>
                <CustomeRadioBox
                  checked={checked}
                  setChecked={setChecked}
                  data={item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='py-[24px] text-[14px] leading-[20px]'>
          <div className='pb-[4px] font-[500] t-1-ellipsis'>
            Xóa tất cả video tải xuống
          </div>
          <div className='text-gray-A'>
            Khi bạn xóa video tải xuống, thiết bị này sẽ có thêm dung lượng
            trống
          </div>
        </div>
        <div className='pl-[24px] flex items-center'>
          <button
            className='px-[16px] border-[1px] border-black-0.2 rounded-[18px] text-nowrap
            text-[14px] font-[500] leading-[36px] text-blue-3E hover:bg-[#263850] hover:border-transparent'
          >
            Xóa tất cả video tải xuống
          </button>
        </div>
      </div>
    </div>
  );
};
export default Download;
