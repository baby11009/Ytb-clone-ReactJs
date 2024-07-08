import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ data, path }) => {
  return (
    <div
      className={`mx-[12px] rounded-[10px] hover:bg-black-0.1 cursor-pointer
        ${path === data?.path && " bg-black-0.2"} `}
        onClick={() => {
            if(data.handleOnClick){
                data.handleOnClick(data.path);
            }
        }}
    >
      <div className='px-[16px] flex items-center h-[40px]'>
        <span className="text-[14px] leading-[20px] font-[500] t-1-ellipsis">{data?.title}</span>
      </div>
    </div>
  );
};

const LeftMenu = ({ path }) => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
  };

  const funcList = [
    {
      id: 1,
      title: "Tài khoản",
      path: "/account-setting/account",
      handleOnClick: handleNav,
    },
    {
      id: 2,
      title: "Thông báo",
      path: "/account-setting/notifications",
      handleOnClick: handleNav,
    },
    {
      id: 3,
      title: "Chức năng phát va hiệu suất",
      path: "/account-setting/playback",
      handleOnClick: handleNav,
    },
    {
      id: 4,
      title: "Nội dung tải xuống",
      path: "/account-setting/downloads",
      handleOnClick: handleNav,
    },
    {
      id: 5,
      title: "Quyền riêng tư",
      path: "/account-setting/privacy",
      handleOnClick: handleNav,
    },
    {
      id: 6,
      title: "Ứng dụng đã kết nối",
      path: "/account-setting/sharing",
      handleOnClick: handleNav,
    },
    {
      id: 7,
      title: "Lập hóa đơn và thanh toán",
      path: "/account-setting/billing",
      handleOnClick: handleNav,
    },
    {
      id: 1,
      title: "Cài đặt nâng cao",
      path: "/account-setting/advanced",
      handleOnClick: handleNav,
    },
  ];

  return (
    <div className='hidden 1-5sm:inline-block fixed py-[18px] w-[240px] left-0 h-screen '>
      <div className='pl-[24px] pb-[20px] text-[20px] leading-[28px] font-[500] text-gray-A'>
        Cài đặt
      </div>
      <div>
        {funcList.map((item, index) => (
          <Button key={index} data={item} path={path} />
        ))}
      </div>
    </div>
  );
};
export default LeftMenu;
