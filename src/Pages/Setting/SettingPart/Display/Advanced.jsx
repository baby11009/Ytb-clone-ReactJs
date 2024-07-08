import { AdvancedIcon } from "../../../../Assets/Icons";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Advanced = () => {
  const input1Ref = useRef();

  const input2Ref = useRef();

  const handleCopy = (inputRef) => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(function () {
          alert("Copied the text: " + inputRef.current.value);
        })
        .catch(function (err) {
          console.error("Could not copy text: ", err);
        });
    }
  };

  return (
    <div>
      <div className='pt-[48px] flex justify-between border-b-[1px] border-b-black-0.2'>
        <div className='pb-[24px]'>
          <div className='text-[16px] leading-[22px] font-[500] text-nowrap'>
            Cài đặt nâng cao
          </div>
          <div className='mt-[40px] mb-[12px] text-[24px] leading-[32px]'>
            Thiết lập YouTube theo đúng ý bạn
          </div>
        </div>
        <div className='w-[180px] h-[180px]'>
          <AdvancedIcon />
        </div>
      </div>

      <div className='mt-[20px]'>
        <div className='flex py-[20px] text-[14px] leading-[20px] font-[500]'>
          <div className='w-[160px] mr-[56px]'>ID người dùng</div>
          <div className='flex-1'>
            <div className='max-w-[350px] border-[1px] border-black-0.2  rounded-[12px] py-[4px] flex items-center'>
              <input
                className='flex-1 ml-[16px] px-[2px] py-[1px] bg-transparent '
                type='text'
                readOnly
                value={"0j0i5jCnkGDyJpSCfkSDAw"}
                ref={input1Ref}
              />
              <button
                className='mx-[8px] px-[16px] text-[14px] leading-[36px] font-[500] text-black
                bg-blue-3E hover:bg-[#65b8ff] rounded-[18px] text-nowrap'
                onClick={() => handleCopy(input1Ref)}
              >
                Sao chép
              </button>
            </div>
          </div>
        </div>

        <div className='flex py-[20px] text-[14px] leading-[20px] font-[500]'>
          <div className='w-[160px] mr-[56px] text-nowrap'>
            Mã nhận dạng kênh
          </div>
          <div className='flex-1'>
            <div className='max-w-[350px] border-[1px] border-black-0.2 rounded-[12px] py-[4px] flex items-center'>
              <input
                className='flex-1 ml-[16px] px-[2px] py-[1px] bg-transparent '
                type='text'
                readOnly
                value={"UC0j0i5jCnkGDyJpSCfkSDAw"}
                ref={input2Ref}
              />
              <button
                className='mx-[8px] px-[16px] text-[14px] leading-[36px] font-[500] text-black
                bg-blue-3E hover:bg-[#65b8ff] rounded-[18px] text-nowrap'
                onClick={() => handleCopy(input2Ref)}
              >
                Sao chép
              </button>
            </div>
          </div>
        </div>

        <div className='flex py-[20px] text-[14px] leading-[20px] font-[500]'>
          <div className='w-[160px] mr-[56px]'>Di chuyển kênh</div>
          <div className='flex-1 text-[14px] leading-[20px]'>
            <Link className='block font-[500] text-blue-3E'>
              Di chuyển kênh đến một tài khoản thương hiệu
            </Link>
            <div className='text-gray-A'>
              Bạn có thể di chuyển kênh của mình đến một tài khoản thương hiệu
            </div>
          </div>
        </div>

        <div className='flex py-[20px] text-[14px] leading-[20px] font-[500]'>
          <div className='w-[160px] mr-[56px]'>Xóa kênh</div>
          <div className='flex-1 text-[14px] leading-[20px]'>
            <Link className='block font-[500] text-blue-3E'>Xóa kênh</Link>
            <div className='text-gray-A'>
              Việc xóa kênh YouTube sẽ không làm Tài khoản Google của bạn bị
              đóng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advanced;
