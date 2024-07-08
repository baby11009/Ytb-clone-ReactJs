import { useState } from "react";
import { GridLayout } from "../../../Component";

import CategoryPart from "./CategoryPart";

const categoryList = [
  {
    id: 1,
    title: "Tất cả",
  },
  {
    id: 2,
    title: "Trò chơi",
  },
  {
    id: 3,
    title: "trực tiếp",
  },
  {
    id: 4,
    title: "Âm nhạc",
  },
  {
    id: 5,
    title: "Danh sách kết hợp",
  },
  {
    id: 6,
    title: "Trò chơi hành động phiêu lưu",
  },
  {
    id: 7,
    title: "Nấu ăn",
  },
  {
    id: 8,
    title: "Đọc rap",
  },
  {
    id: 9,
    title: "Mới tải lên gần đây",
  },
  {
    id: 10,
    title: "Đã xem",
  },
  {
    id: 11,
    title: "Đề xuất mới",
  },
];

const MainPart = ({ openedMenu }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div>
      <CategoryPart
        categoryList={categoryList}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className='mt-[80px] px-[16px]'>
        <GridLayout openedMenu={openedMenu} />
      </div>
    </div>
  );
};
export default MainPart;
