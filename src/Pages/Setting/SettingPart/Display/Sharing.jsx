import { SharingIcon } from "../../../../Assets/Icons";
import { Link } from "react-router-dom";
import {
  EA_app,
  Epic_app,
  Garena_app,
  Riot_app,
  Ubi_app,
} from "../../../../Assets/Images";

const appList = [
  {
    id: 1,
    name: "Electronic Arts",
    thumb: EA_app,
    desc: "Kết nối tài khoản rồi xem các sự kiện và video đã được phê duyệt để có cơ hội nhận phần thưởng trong trò chơi",
  },
  {
    id: 2,
    name: "Epic Games",
    thumb: Epic_app,
    desc: "Kết nối tài khoản rồi xem các sự kiện và video đã được phê duyệt để có cơ hội nhận phần thưởng trong trò chơi",
  },
  {
    id: 3,
    name: "Garena",
    thumb: Garena_app,
    desc: "Kết nối tài khoản rồi xem các sự kiện và video đã được phê duyệt để có cơ hội nhận phần thưởng trong trò chơi",
  },
  {
    id: 4,
    name: "Riot Games",
    thumb: Riot_app,
    desc: "Kết nối tài khoản rồi xem các sự kiện và video đã được phê duyệt để có cơ hội nhận phần thưởng trong trò chơi",
  },
  {
    id: 5,
    name: "Tài khoản Ubisoft",
    thumb: Ubi_app,
    desc: "Kết nối tài khoản rồi xem các sự kiện và video đã được phê duyệt để có cơ hội nhận phần thưởng trong trò chơi",
  },
];

const AppCard = ({ data }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='py-[24px] flex'>
        <div className='mr-[16px]'>
          <img
            src={data?.thumb}
            alt='thumb image'
            className='size-[48px] rounded-[50%]'
          />
        </div>
        <div className='pr-[24px] flex-1 text-[14px] leading-[20px] '>
          <div className='font-[500] pb-[4px]'>{data?.name}</div>
          <div className='text-gray-A'>{data?.desc}</div>
        </div>
      </div>

      <div className='pl-[24px] flex items-center'>
        <button
          className='px-[16px] w-[120px] flex justify-center border-[1px] border-black-0.2 rounded-[18px] 
            text-[14px] font-[500] leading-[36px] text-blue-3E hover:bg-[#263850] hover:border-transparent'
        >
          Kết nối
        </button>
      </div>
    </div>
  );
};

const Sharing = () => {
  return (
    <div>
      <div className='pt-[48px] flex justify-between border-b-[1px] border-b-black-0.2'>
        <div className='pb-[24px]'>
          <div className='text-[16px] leading-[22px] font-[500] t-1-ellipsis'>
            Ứng dụng đã kết nối
          </div>
          <div className='mt-[40px] mb-[12px] text-[24px] leading-[32px] t-ellipsis'>
            Mở rộng trải nghiệm của bạn
          </div>
          <div className='text-[14px] leading-[20px] text-gray-A'>
            <div>
              Kết nối YouTube với các ứng dụng khác và xem video dễ dàng hơn
            </div>
            <Link className=' text-blue-3E'>
              Xem tất cả trang web được phép truy cập vào Tài khoản Google của
              bạn
            </Link>
          </div>
        </div>
        <div className='w-[180px] h-[180px]'>
          <SharingIcon />
        </div>
      </div>

      <div>
        {appList.map((item) => (
          <AppCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Sharing;
