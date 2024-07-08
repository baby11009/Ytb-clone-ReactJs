import { PlayIcon } from "../../../../../Assets/Icons";
import ShortVidsRow from "./ShortVidsRow";
import RelativeRow from "./RelativeRow";
import { VideoCard, VideoRow } from "../../../../../Component";
import {
  iloda_v1,
  iloda,
  zeros,
  levi,
  sangtraan,
  theanh,
  MyChannel,
  vuive,
  bauffs,
} from "../../../../../Assets/Images";

const firstVid = {
  id: 1,
  thumb: iloda_v1,
  channel: {
    name: "iLoda",
    subs: 195000,
  },
  type: {
    title: "video",
  },
  title:
    "Tôi biến VÙNG ĐẤT HOANG thành VƯƠNG QUỐC TRUNG CỔ THỊNH VƯỢNG mỗi tội ... (Manor Lords #1)",
  view: 133000,
  postedTime: "04/15/2024, 12:25:32 AM",
  desc: "➥ Đăng ký kênh để xem thêm Video mỗi ngày: https://bom.to/2ylFGlf ➥ Lịch Live: 2 ca Stream mỗi ngày:- Ca 1: 12h - 15h30- Ca 2: 22h - 3h30 Các buổi Stream sẽ bắt...",
};

const membersList = [
  {
    id: 1,
    img: zeros,
  },
  {
    id: 2,
    img: iloda,
  },
  {
    id: 3,
    img: levi,
  },
  {
    id: 4,
    img: sangtraan,
  },
  {
    id: 5,
    img: theanh,
  },
  {
    id: 6,
    img: MyChannel,
  },
  {
    id: 7,
    img: vuive,
  },
  {
    id: 8,
    img: bauffs,
  },
];

const RowLayout = ({ title, noBtn, children }) => {
  return (
    <div className='border-b-[1px] border-black-0.2'>
      <div className='mt-[24px] mb-[12px] text-[20px] leading-[28px] font-bold flex items-center gap-[6px] cursor-pointer'>
        <div className=' text-nowrap t-1-ellipsis'>{title}</div>
        {!noBtn && (
          <div className='flex items-center cursor-pointer px-[16px] rounded-[18px] hover:bg-black-0.2'>
            <div className='ml-[-6px] mr-[6px]'>
              <PlayIcon />
            </div>
            <span className='text-[14px] leading-[36px] font-[500] text-nowrap'>
              Phát tất cả
            </span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

const ChannelHome = () => {
  return (
    <div className='w-full'>
      {/* First vid */}
      <div className='py-[24px] border-b-[1px] border-black-0.2 overflow-hidden mr-[-32px] xsm:mr-0'>
        <div className='w-full  max-w-[862px]'>
          <VideoCard
            data={firstVid}
            showBtn={true}
            noFunc2={true}
            style={"flex gap-[16px] mx-0 mb-0"}
            thumbStyle={"min-w-[246px] w-[246px] h-[138px] mb-0 rounded-[8px]"}
            titleStyle={"text-[18px] leading-[26px] font-[400] max-h-[56px]"}
            infoStyle={"flex text-[12px] leading-[18px]"}
          />
        </div>
      </div>

      {/* Membership */}

      <div className='py-[16px] border-b-[1px] border-black-0.2 overflow-hidden'>
        <div className='flex flex-wrap items-center '>
          <div className='flex-1 py-[6px] mr-[40px] text-nowrap'>
            <span className='text-[16px] leading-[22px] text-white-F1 block'>
              Hội viên của chúng tôi
            </span>
            <span className='text-[14px] leading-[20px] text-gray-A'>
              Chân thành cảm ơn các hội viên của kênh!
            </span>
          </div>

          <div className='flex items-center py-[6px] mr-[24px]'>
            {membersList.map((item) => (
              <div
                className='w-[36px] h-[36px] rounded-[50%] overflow-hidden mr-[16px]'
                key={item.id}
              >
                <img src={item.img} alt='member' />
              </div>
            ))}
          </div>

          <button
            className='px-[15px] my-[6px] border-[1px] border-black-0.2 rounded-[18px] text-[14px] leading-[36px] text-blue-3E
            hover:border-[transparent] hover:bg-[#263850]
          '
          >
            Tham gia
          </button>
        </div>
      </div>

      {/* Recommend & List  */}

      <RowLayout title={"Dành cho bạn"} noBtn={true}>
        <VideoRow showBtn={true} width={354} marginX={2} top={"top-[30%]"} />
      </RowLayout>

      <RowLayout title={"Daily Moment Thầy Giáo Ba Stream"}>
        <VideoRow
          showBtn={true}
          width={210}
          marginX={2}
          top={"top-[20%]"}
          thumbRound={"8px"}
        />
      </RowLayout>
      <RowLayout title={"Abe Reaction"}>
        <VideoRow
          showBtn={true}
          width={210}
          marginX={2}
          top={"top-[20%]"}
          thumbRound={"8px"}
        />
      </RowLayout>
      <RowLayout title={"Video phổ biến"}>
        <VideoRow
          showBtn={true}
          width={210}
          marginX={2}
          top={"top-[20%]"}
          thumbRound={"8px"}
        />
      </RowLayout>

      <RowLayout title={"Short Videos"}>
        <ShortVidsRow width={210} marginX={2} top={"top-[15%]"} />
      </RowLayout>

      {/* Relative */}
      <RelativeRow />
    </div>
  );
};
export default ChannelHome;
