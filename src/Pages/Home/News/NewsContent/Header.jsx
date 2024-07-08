import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const headerList = [
  {
    id: 1,
    title: "Tin nổi bật",
    slug: "top",
  },
  {
    id: 2,
    title: "Thể thao",
    slug: "sport",
  },
  {
    id: 3,
    title: "Giải trí",
    slug: "entertain",
  },
  {
    id: 4,
    title: "Kinh doanh",
    slug: "business",
  },
  {
    id: 5,
    title: "Công nghệ",
    slug: "tech",
  },
  {
    id: 6,
    title: "Thể giới",
    slug: "world",
  },
  {
    id: 7,
    title: "Trong nước",
    slug: "domestic",
  },
  {
    id: 8,
    title: "Khoa học",
    slug: "science",
  },
  {
    id: 9,
    title: "Sức khỏe",
    slug: "health",
  },
];

const Header = ({ activeId, setActiveId }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const menuRefs = useRef([]);

  useLayoutEffect(() => {
    const activeMenuItem = menuRefs.current[activeId];
    if (activeMenuItem) {
      setIndicatorStyle({
        width: activeMenuItem.offsetWidth,
        left: activeMenuItem.offsetLeft,
      });
    }
  }, [activeId]);
  return (
    <div className='border-b-[1px] border-black-0.2'>
      <h1 className='text-[32px] leading-[50px] font-bold'>Tin tức</h1>
      <div className='flex gap-[24px] overflow-x-auto relative'>
        <div
          className='absolute h-[2px] w-[50px] bg-white-F1 bottom-0 transtion-all duration-[0.3s] ease-in'
          style={indicatorStyle}
        ></div>
        {headerList.map((item, index) => (
          <Link
            key={index}
            className={`h-[48px] flex items-center text-[16px] leading-[22px] font-[500]
            text-nowrap border-b-[3px] border-transparent  ${
              activeId !== index
                ? "  hover:border-black-0.2 text-gray-A"
                : " text-white-F1"
            }`}
            to={`?tag=${item.slug}`}
            ref={(el) => (menuRefs.current[index] = el)}
            onClick={() => setActiveId(index)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Header;
