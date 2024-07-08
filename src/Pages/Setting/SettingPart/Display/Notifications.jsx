import { NotificationsIcon } from "../../../../Assets/Icons";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ThinArrowIcon } from "../../../../Assets/Icons";
import { CustomeBox } from "./Component/Component";

const list1 = [
  {
    id: 1,
    title: "Kênh đăng ký",
    desc: "Thông báo cho tôi về hoạt động của",
    link: "các kênh mà tôi đăng ký",
  },
  {
    id: 2,
    title: "Video đề xuất",
    desc: "Thông báo cho tôi về các video mà tôi có thể thích dựa trên nội dung đã xem",
  },
  {
    id: 3,
    title: "Hoạt động trên kênh của tôi",
    desc: "Thông báo cho tôi về bình luận và hoạt động khác trên kênh hoặc video của tôi",
  },
  {
    id: 4,
    title: "Phản hồi đối với bình luận của tôi",
    desc: "Thông báo cho tôi về hoạt động liên quan đến bình luận và bài đăng của tôi trên những kênh khác",
  },
  {
    id: 5,
    title: "Lượt đề cập",
    desc: "Thông báo cho tôi khi những người khác đề cập đến kênh của tôi",
  },
  {
    id: 6,
    title: "Nội dung được chia sẻ",
    desc: "Thông báo cho tôi khi có người khác chia sẻ nội dung của tôi trên kênh của họ",
  },
  {
    id: 7,
    title: "Nội dung quảng bá và ưu đãi",
    desc: "Thông báo cho tôi về nội dung quảng bá và ưu đãi, chẳng hạn như đặc quyền chỉ dành cho thành viên",
  },
];

const langList = [
  "Afrikaans",
  "Bosanski",
  "Deutsch",
  "Dansk",
  "English (UK)",
  "English (US)",
  "Português",
  "Português (Brasil)",
  "Italiano",
  "Filipino",
  "Tiếng Việt",
  "Беларуская",
  "অসমীয়া",
  "മലയാളം",
  "中文 (简体)",
  "日本語",
  "한국어",
];

const LanguageCard = ({ data, setCurrLang, setOpened }) => {
  return (
    <div
      className='min-h-[48px] flex items-center active:bg-black-0.2'
      onClick={(e) => {
        e.stopPropagation();
        setCurrLang(data);
        setOpened(false);
      }}
    >
      <span className='px-[16px] text-[14px] leading-[20px] text-nowrap'>
        {data}
      </span>
    </div>
  );
};

const Notifications = () => {
  const boxRef = useRef();

  const [opened, setOpened] = useState(false);

  const [currLang, setCurrLang] = useState("Tiếng việt");

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpened(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutSide);

    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div>
      <div className='pt-[48px] flex justify-between border-b-[1px] border-b-black-0.2'>
        <div className='pb-[24px]'>
          <div className='text-[16px] leading-[22px] font-[500] t-1-ellipsis'>
            Thông báo
          </div>
          <div className='mt-[40px] mb-[12px] text-[24px] leading-[32px] t-ellipsis'>
            Chọn cách và thời gian bạn muốn nhận thông báo
          </div>
          <div className='text-[14px] leading-[20px] text-gray-A'>
            Chọn thông báo đẩy và thông báo qua email mà bạn muốn nhận
          </div>
        </div>
        <div className='w-[180px] h-[180px]'>
          <NotificationsIcon />
        </div>
      </div>

      <div className=' border-b-[1px] border-b-black-0.2'>
        <div className='pt-[24px] pb-[8px] text-[20px] leading-[28px] font-bold t-1-ellipsis'>
          Chung
        </div>
        <div className='text-[12px] leading-[18px] text-gray-A t-ellipsis'>
          Quản lý thông báo trên màn hình và trên thiết bị di động
        </div>
        <div className='py-[20px] mb-[20px] flex'>
          <div className='w-[160px] mr-[56px]'>Tùy chọn của bạn</div>
          <div className='flex-1'>
            {list1.map((item, id) => (
              <CustomeBox key={id} data={item} />
            ))}
          </div>
        </div>
      </div>

      <div className=' mb-[20px]'>
        <div className='pt-[24px] pb-[8px] text-[20px] leading-[28px] font-bold t-1-ellipsis'>
          Thông báo qua email
        </div>
        <div className='text-[12px] leading-[18px] text-gray-A t-ellipsis'>
          <span>Các email của bạn được gửi đến </span>
          <span>vohuythanh2003@gmail.com</span>
          <span>
            . Để hủy đăng ký nhận một email, hãy nhấp vào đường liên kết "Hủy
            đăng ký" ở cuối email đó.{" "}
          </span>
          <Link className='text-blue-3E'>Tìm hiểu thêm</Link>
          <span> về email từ YouTube.</span>
        </div>
        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px]'>Quyền</div>
          <div className='flex-1'>
            <CustomeBox
              data={{
                id: 8,
                title:
                  "Gửi cho tôi email về hoạt động của tôi trên YouTube và thông tin cập nhật mà tôi đã yêu cầu",
                desc: "Nếu bạn tắt tùy chọn cài đặt này, YouTube vẫn có thể gửi thư cho bạn liên quan đến tài khoản của bạn, thông báo bắt buộc về dịch vụ, thông báo pháp lý và các vấn đề về quyền riêng tư",
              }}
            />
          </div>
        </div>

        <div className='py-[20px] flex'>
          <div className='w-[160px] mr-[56px]'>Ngôn ngữ</div>
          <div className='flex-1'>
            <div
              className='px-[16px] w-full max-w-[280px] min-w-[240px] mb-[8px] box-content bg-black-0.2 relative'
              ref={boxRef}
            >
              <div
                className='pt-[16px] pb-[8px] relative text-gray-A tracking-[0.2px] leading-[20px]'
                onClick={(e) => {
                  e.stopPropagation();
                  setOpened((prev) => !prev);
                }}
              >
                <label htmlFor='' className='absolute top-[8px] text-[12px] '>
                  Ngôn ngữ của email
                </label>
                <div className='pt-[12px] pr-[20px] text-[14px]'>
                  {currLang}
                </div>
                <div className=' rotate-90 w-[24px] h-[24px] absolute right-0 bottom-[8px]'>
                  <ThinArrowIcon color={"#aaaaaa"} />
                </div>
                <div
                  className='absolute h-[2px] bg-white-F1 duration-[0.2s]'
                  style={{
                    width: opened ? "100%" : "8px",
                    left: opened ? "0" : "50%",
                    visibility: opened ? "visible" : "hidden",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                ></div>
              </div>
              {opened && (
                <div className='absolute w-[200px] max-h-[426px] bg-[#212121] z-[50] bottom-[10px]'>
                  <div className='py-[8px] flex flex-col h-[400px] overflow-y-auto box-content scrollbar-2'>
                    {langList.map((item, id) => (
                      <LanguageCard
                        key={id}
                        data={item}
                        setCurrLang={setCurrLang}
                        setOpened={setOpened}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className='text-[14px] leading-[20px] text-gray-A t-ellipsis'>
              Tùy chọn cài đặt này chỉ áp dụng cho email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
