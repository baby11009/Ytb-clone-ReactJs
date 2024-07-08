import { popular_img } from "../../../../Assets/Images";
import { useRef, useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const headerList = [
  {
    id: 1,
    title: "Mới nhất",
    slug: "latest",
  },
  {
    id: 2,
    title: "Âm nhạc",
    slug: "music",
  },
  {
    id: 3,
    title: "Trò chơi",
    slug: "game",
  },
  {
    id: 4,
    title: "Phim ảnh",
    slug: "movie",
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
    <div className=' border-b-[1px] border-black-0.2'>
      <div className='pt-[24px] pb-[4px] flex items-center'>
        <img
          src={popular_img}
          alt='image'
          className=' size-[48px] 2xsm:size-[72px] rounded-[50%] mr-[16px]'
        />
        <h1 className='text-[24px] leading-[32px] 2xsm:text-[36px] 2xsm:leading-[50px] font-bold'>
          Thịnh hành
        </h1>
      </div>

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
