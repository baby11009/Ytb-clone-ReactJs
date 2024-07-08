import { CardRow } from "../../../../Component";
import { useState, useRef, useEffect } from "react";
import { ThinArrowIcon } from "../../../../Assets/Icons";

const DataBox = ({ title, data, handleResizeCard, showCard, openedMenu }) => {
  const [rowsQtt, setRowsQtt] = useState(1);

  const [showedRows, setshowedRows] = useState(
    Array.from({ length: rowsQtt }, (_, i) => i)
  );

  useEffect(() => {
    setshowedRows(Array.from({ length: rowsQtt }, (_, i) => i));
  }, [rowsQtt]);

  const handleShowMore = () => {
    if (rowsQtt === 1) {
      setRowsQtt(Math.ceil(data?.length / showCard));
    } else {
      setRowsQtt(1);
    }
  };

  return (
    <div className='pb-[16px] mb-[32px] border-b-[1px] border-black-0.2 relative'>
      <div className='ml-[8px] mb-[24px]'>
        <span className='text-[18px] leading-[26px] 2xsm:text-[20px] 2xsm:leading-[28px] font-bold t-1-ellipsis'>
          {title}
        </span>
      </div>
      <div className='flex flex-col'>
        {showedRows.map((item) => (
          <CardRow
            key={item}
            handleResize={handleResizeCard}
            showQtt={showCard}
            openedMenu={openedMenu}
            vidList={data?.slice(item * showCard, item * showCard + showCard)}
          />
        ))}
      </div>
      <div className='absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] bg-black'>
        <button
          className='flex items-center justify-center w-[360px] px-[15px] border-[1px] border-black-0.2 rounded-[18px] 
        hover:border-transparent hover:bg-black-0.1'
          onClick={() => {
            handleShowMore();
          }}
        >
          <span className='text-[14px] leading-[36px] font-[500]'>
            {rowsQtt > 1 ? "Ẩn bớt" : "Hiện thêm"}
          </span>
          <div
            className={`ml-[6px] mr-[-6px] ${
              rowsQtt > 1 ? "rotate-[-90deg]" : "rotate-90"
            }`}
          >
            <ThinArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

const DisplayContent = ({ data, openedMenu }) => {
  const [showCard, setShowCard] = useState(1);

  const handleResizeCard = () => {
    if (window.innerWidth < 640) {
      setShowCard(1);
    } else if (window.innerWidth < 1024) {
      setShowCard(2);
    } else if (window.innerWidth < 1280) {
      setShowCard(3);
    } else if (window.innerWidth < 1536) {
      if (openedMenu) {
        setShowCard(3);
      } else {
        setShowCard(4);
      }
    } else if (window.innerWidth < 1760) {
      setShowCard(4);
    } else if (window.innerWidth < 2086) {
      if (openedMenu) {
        setShowCard(4);
      } else {
        setShowCard(5);
      }
    } else if (window.innerWidth < 2256) {
      if (openedMenu) {
        setShowCard(5);
      } else {
        setShowCard(6);
      }
    } else setShowCard(6);
  };
  return (
    <div className='pt-[24px]'>
      <DataBox
        title={
          "Kết quả EURO 2024: Pickford xuất sắc, Anh loại Thụy Sỹ bằng luân lưu 11m | VTs"
        }
        data={data}
        openedMenu={openedMenu}
        handleResizeCard={handleResizeCard}
        showCard={showCard}
      />
      <DataBox
        title={
          "Kết quả EURO 2024: Thắng kịch tính Thổ Nhĩ Kỳ, Hà Lan gặp Anh ở bán kết | Báo Dân Việt"
        }
        data={data}
        openedMenu={openedMenu}
        handleResizeCard={handleResizeCard}
        showCard={showCard}
      />
      <DataBox
        title={
          "Đánh bại Bỉ, bóng chuyền nữ Việt Nam giành huy chương đồng lịch sử ở FIVB Challenger Cup | VTs"
        }
        data={data}
        openedMenu={openedMenu}
        handleResizeCard={handleResizeCard}
        showCard={showCard}
      />
    </div>
  );
};
export default DisplayContent;
