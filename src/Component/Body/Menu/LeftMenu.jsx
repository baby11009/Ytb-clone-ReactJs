import {
  ThinArrowIcon,
  LiveStreamIcon,
  DotIcon,
  AllIcon,
} from "../../../Assets/Icons";

import { useNavigate } from "react-router-dom";

import {
  Button,
  SmButton,
  LinkComponent,
  channelList,
  footerList1,
  footerList2,
  funcList1,
  funcList2,
  funcList3,
  funcList4,
  funcList5,
} from "./Component";

import { useState } from "react";

const LeftMenu = ({ openedMenu, path }) => {
  const [showMored, setShowMored] = useState(false);

  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`fixed top-[56px] left-0  ${
        openedMenu ? "w-[240px]" : "w-[74px]"
      }  h-screen`}
    >
      {/* Big menu */}
      {openedMenu && (
        <>
          <div className='text-[14px] font-[500] leading-[20px] h-full-minus-56 overflow-y-scroll menu-scrollbar'>
            <div className='p-[12px]  '>
              <ul>
                {funcList1.slice(0, 3).map((item) => (
                  <Button
                    key={item.id}
                    data={item}
                    path={path}
                    handleOnClick={handleNav}
                  />
                ))}
              </ul>
              <ul className='border-t-[1px] border-[rgba(255,255,255,0.2)] mt-[12px] pt-[12px]'>
                <Button
                  data={{
                    title: "Bạn",
                    path: "me",
                    icon: <ThinArrowIcon />,
                  }}
                  handleOnClick={handleNav}
                  path={path}
                  style='flex-row-reverse justify-end !gap-[8px]'
                  textStyle='text-[16px]'
                />
                {funcList2.map((item) => (
                  <Button
                    key={item.id}
                    data={item}
                    path={path}
                    handleOnClick={handleNav}
                  />
                ))}
              </ul>
              <ul className='border-t-[1px] border-[rgba(255,255,255,0.2)] mt-[12px] pt-[12px]'>
                <li className='px-[12px] text-[16px] pt-[6px] pb-[4px] leading-[22px]'>
                  Kênh đăng ký
                </li>
                {channelList
                  .slice(0, showMored ? channelList.length : 7)
                  .map((item) => (
                    <Button
                      key={item.id}
                      data={{
                        title: item.name,
                        path: `/channel/${item.id}`,
                        icon: (
                          <img
                            src={item.img}
                            alt='channel'
                            className='w-[24px] h-[24px] rounded-full'
                          />
                        ),
                        icon2:
                          item.state === 1 ? (
                            <DotIcon />
                          ) : (
                            item.state === 2 && <LiveStreamIcon />
                          ),
                      }}
                      path={path}
                      handleOnClick={handleNav}
                    />
                  ))}
                {showMored && (
                  <Button
                    data={{
                      title: "Tất cả kênh đăng ký",
                      path: "/sub-channels",
                      icon: <AllIcon />,
                    }}
                    path={path}
                    handleOnClick={handleNav}
                  />
                )}
                <li
                  className={`px-[12px] hover:bg-hover-black rounded-[10px] cursor-pointer`}
                  onClick={() => setShowMored((prev) => !prev)}
                >
                  <div className={`flex items-center h-[40px] `}>
                    <div
                      className={`mr-[24px] ${
                        showMored ? "rotate-[-90deg]" : "rotate-90"
                      } rotate-90`}
                    >
                      <ThinArrowIcon size='24' />
                    </div>
                    <span className={`flex-1`}>
                      {showMored ? "Ẩn bớt" : "Thêm"}
                    </span>
                  </div>
                </li>
              </ul>
              <ul className='border-t-[1px] border-[rgba(255,255,255,0.2)] mt-[12px] pt-[12px]'>
                <li className='px-[12px] text-[16px] pt-[6px] pb-[4px] leading-[22px]'>
                  Khám phá
                </li>
                {funcList3.map((item) => (
                  <Button
                    key={item.id}
                    data={item}
                    path={path}
                    handleOnClick={handleNav}
                  />
                ))}
              </ul>
              <ul className='border-t-[1px] border-[rgba(255,255,255,0.2)] mt-[12px] pt-[12px]'>
                <li className='px-[12px] text-[16px] pt-[6px] pb-[4px] leading-[22px]'>
                  Dịch vụ khác
                </li>
                {funcList4.map((item) => (
                  <Button
                    key={item.id}
                    data={item}
                    path={path}
                    handleOnClick={handleNav}
                  />
                ))}
              </ul>
              <ul className='border-t-[1px] border-[rgba(255,255,255,0.2)] mt-[12px] pt-[12px]'>
                {funcList5.map((item) => (
                  <Button
                    key={item.id}
                    data={item}
                    path={path}
                    handleOnClick={handleNav}
                  />
                ))}
              </ul>
              <div
                className='border-t-[1px] border-[rgba(255,255,255,0.2)] mt-[12px] pt-[12px] text-[#AAAAAA] 
                text-[13px] leading-[18px] font-bold  px-[12px]'
              >
                <ul className='flex flex-wrap mb-[12px]'>
                  {footerList1.map((item, i) => (
                    <LinkComponent key={i} title={item} />
                  ))}
                </ul>
                <ul className='flex flex-wrap'>
                  {footerList2.map((item, i) => (
                    <LinkComponent key={i} title={item} />
                  ))}
                </ul>
                <div className=' text-gray-71 text-[12px] font-[400] mt-[16px]'>
                  © 2024 Google LLC
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Small menu */}
      {!openedMenu && (
        <ul className='mt-[4px] px-[4px]'>
          {funcList1.map((item) => (
            <SmButton
              key={item.id}
              data={item}
              path={path}
              handleOnClick={handleNav}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default LeftMenu;
