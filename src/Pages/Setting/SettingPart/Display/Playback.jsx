import { PlaybackIcon } from "../../../../Assets/Icons";
import { CheckBox2 } from "../../../../Component";
import { useState } from "react";
import { RoundCircleIcon } from "../../../../Assets/Icons";
import { CustomeBox, CustomeRadioBox } from "./Component/Component";

const radioList = [
  {
    id: 1,
    desc: "Tự động (khuyên dùng)",
  },
  {
    id: 2,
    desc: "Ưu tiên dùng AV1 cho chế độ SD",
    question: true,
  },
  {
    id: 3,
    desc: "Luôn ưu tiên AV1",
    question: true,
  },
];

const CustomeBox2 = ({ data }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex items-center cursor-pointer'>
      <CheckBox2 checked={checked} setChecked={setChecked} />
      <div
        className='pl-[16px] text-[14px] leading-[20px] text-gray-A'
        onClick={() => setChecked((prev) => !prev)}
      >
        {data.desc}
      </div>
      {data?.question && (
        <div className='w-[24px] h-[16px] text-gray-A mx-[16px] '>
          <RoundCircleIcon />
        </div>
      )}
    </div>
  );
};

const Playback = () => {
  const [checked, setChecked] = useState(1);

  return (
    <div>
      <div className='pt-[48px] flex justify-between border-b-[1px] border-b-black-0.2'>
        <div className='pb-[24px]'>
          <div className='text-[16px] leading-[22px] font-[500] t-1-ellipsis'>
            Chức năng phát và hiệu suất
          </div>
          <div className='mt-[40px] mb-[12px] text-[24px] leading-[32px] t-ellipsis'>
            Kiểm soát trải nghiệm xem video của bạn
          </div>
          <div className='text-[14px] leading-[20px] text-gray-A'>
            Các tùy chọn cài đặt phát lại chỉ áp dụng cho trình duyệt này
          </div>
        </div>
        <div className='w-[180px] h-[180px]'>
          <PlaybackIcon />
        </div>
      </div>

      <div className='mt-[20px]'>
        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Thẻ thông tin
          </div>
          <div className='flex-1'>
            <CustomeBox2
              data={{
                desc: "Hiển thị thẻ thông tin trong video",
                question: true,
              }}
            />
          </div>
        </div>

        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Phụ đề
          </div>
          <div className='flex-1'>
            <div className='mt-[4px] mb-[20px]'>
              <CustomeBox2
                data={{
                  desc: "Luôn hiện phụ đề",
                }}
              />
            </div>
            <div className='my-[4px]'>
              <CustomeBox2
                data={{
                  desc: "Bao gồm cả phụ đề được tạo tự động (nếu có)",
                }}
              />
            </div>
          </div>
        </div>

        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Cài đặt AV1
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

        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px] text-[14px] leading-[20px] font-[500]'>
            Duyệt web
          </div>
          <div className='flex-1'>
            <CustomeBox
              data={{
                id: 1,
                title: "Đoạn xem trước video",
                desc: "Đoạn xem trước video sẽ phát khi bạn di chuột lên hình thu nhỏ",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Playback;
