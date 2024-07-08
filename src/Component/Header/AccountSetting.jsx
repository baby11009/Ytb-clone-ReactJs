import { MyChannel } from "../../Assets/Images";
import {
  GoogleIcon,
  MyChannelIcon,
  LogOutIcon,
  YoutubeStudio2Icon,
  TransactionIcon,
  MyDataIcon,
  ThemeIcon,
  LanguageIcon,
  RestrictedIcon,
  LocationIcon,
  ShortcutIcon,
  ThinArrowIcon,
  SettingIcon,
  HelpIcon,
  FeedBackIcon,
} from "../../Assets/Icons";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const CutomeButton = ({ icon1, state, title }) => {
  return (
    <Link>
      <div className='flex items-center h-[40px] px-[16px] hover:bg-hover-black'>
        <div className='mr-[16px]'>{icon1}</div>
        <span className='flex-1 text-start'>{title}</span>
        {state === 1 && (
          <div>
            <ThinArrowIcon size={"24"} />
          </div>
        )}
      </div>
    </Link>
  );
};

const AccountSetting = ({ setOpened }) => {
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpened("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className='absolute w-[300px] h-screen-h-minus-11 bg-[#282828] top-[3px] 
        left-[-301px] z-[500] rounded-[12px] text-[16px] leading-[22px] text-white-F1 cursor-default
        flex flex-col'
      ref={divRef}
      onClick={(e) => e.stopPropagation()}
    >
      <div className='p-[16px] flex border-b-[1px] border-b-[rgba(255,255,255,0.2)]'>
        <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-[16px]'>
          <img src={MyChannel} alt='user' />
        </div>
        <div className='flex flex-col items-start'>
          <span>thanh vo huy</span>
          <span>@thanhvohuy8451</span>
          <Link className='mt-[8px] text-blue-3E'>Xem kênh của bạn</Link>
        </div>
      </div>
      <div className=' overflow-y-auto  menu-scrollbar'>
        <div className='py-[8px] border-b-[1px] border-b-[rgba(255,255,255,0.2)] text-[14px] leading-[20px]'>
          <CutomeButton
            icon1={<GoogleIcon />}
            title={"Tài khoản Google"}
            state={0}
          />
          <CutomeButton
            icon1={<MyChannelIcon />}
            title={"Chuyển đổi tài khoản"}
            state={1}
          />
          <CutomeButton icon1={<LogOutIcon />} title={"Đăng xuất"} state={0} />
        </div>
        <div className='py-[8px] border-b-[1px] border-b-[rgba(255,255,255,0.2)] text-[14px] leading-[20px]'>
          <CutomeButton
            icon1={<YoutubeStudio2Icon />}
            title={"YouTube Studio"}
            state={0}
          />
          <CutomeButton
            icon1={<TransactionIcon />}
            title={"Giao dịch mua và gói thành viên"}
            state={0}
          />
        </div>
        <div className='py-[8px] border-b-[1px] border-b-[rgba(255,255,255,0.2)] text-[14px] leading-[20px]'>
          <CutomeButton
            icon1={<MyDataIcon />}
            title={"Dữ liệu của bạn trong YouTube"}
            state={0}
          />
          <CutomeButton
            icon1={<ThemeIcon />}
            title={"Giao diện: Giao diện thiết bị"}
            state={1}
          />
          <CutomeButton
            icon1={<LanguageIcon />}
            title={"Ngôn ngữ: Tiếng Việt"}
            state={1}
          />
          <CutomeButton
            icon1={<RestrictedIcon />}
            title={"Chế độ hạn chế : Đã tắt"}
            state={1}
          />
          <CutomeButton
            icon1={<LocationIcon />}
            title={"Địa điểm: Việt Nam"}
            state={1}
          />
          <CutomeButton icon1={<ShortcutIcon />} title={"Phím tắt"} state={0} />
        </div>
        <div className='py-[8px] border-b-[1px] border-b-[rgba(255,255,255,0.2)] text-[14px] leading-[20px]'>
          <CutomeButton icon1={<SettingIcon />} title={"Cài đặt"} state={0} />
        </div>
        <div className='py-[8px] border-b-[1px] border-b-[rgba(255,255,255,0.2)] text-[14px] leading-[20px]'>
          <CutomeButton icon1={<HelpIcon />} title={"Trợ giúp"} state={0} />
          <CutomeButton
            icon1={<FeedBackIcon />}
            title={"Gửi ý kiến phản hồi"}
            state={0}
          />
        </div>
      </div>
    </div>
  );
};
export default AccountSetting;
