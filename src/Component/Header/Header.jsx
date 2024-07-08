import {
  MenuIcon,
  YoutubeIcon,
  SearchIcon,
  MicIcon,
  CreateVideoIcon,
  BellIcon,
  BackIcon,
} from "../../Assets/Icons";
import { MyChannel } from "../../Assets/Images";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AccountSetting from "./AccountSetting";
import NotificationBox from "./NotificationBox";
import { Link } from "react-router-dom";

const fakeHistory = [
  {
    id: 1,
    content: "Nói dối nữa đi",
  },
  {
    id: 2,
    content: "Redux in reactjs",
  },
  {
    id: 3,
    content: "damit2k",
  },
  {
    id: 4,
    content: "pubg",
  },
  {
    id: 5,
    content: "longaoden",
  },
  {
    id: 6,
    content: "solarbarca",
  },
  {
    id: 7,
    content: "hk15",
  },
  {
    id: 8,
    content: "saangtraan",
  },
  {
    id: 9,
    content: "Thầy giáo ba",
  },
  {
    id: 10,
    content: "iloda",
  },
];

const Header = ({ setOpenedMenu }) => {
  const searchRef = useRef();

  const inputRef = useRef();

  const [opened, setOpened] = useState("");

  const [inputValue, setInputValue] = useState("");

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsFocused("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const handleSearch = (e) => {
    e.preventDefault();
    setOpened("");
  };

  return (
    <header className='px-[8px] sm:px-[16px] bg-black fixed top-0 left-0 h-[56px] w-full flex items-center justify-between z-[2000]'>
      <div className='flex  items-center justify-center  h-full'>
        <div className='size-[40px] rounded-[50%] p-[8px] mr-[4px] sm:mr-0
         flex items-end justify-center active:bg-black-0.2'>
          <button onClick={() => setOpenedMenu((prev) => !prev)}>
            <MenuIcon />
          </button>
        </div>
        <div className=' h-full  pl-[16px] pr-[14px] py-[18px]'>
          <Link to='/'>
            <div className='w-[90px] relative'>
              <YoutubeIcon />
              <span className=' text-gray-A text-[10px] absolute right-[-17.5px] top-[-7px]'>
                VN
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className='w-[732px] z-[2]'>
        <div
          className={`md:ml-[40px] px-[4px] md:!flex items-center ${
            opened === "search"
              ? "absolute inset-0 h-full bg-black flex "
              : "hidden"
          } `}
        >
          <motion.button
            title='Quay lại'
            type='button'
            onClick={() => setOpened("")}
            className=' w-[40px] h-[40px] rounded-full
            flex items-center justify-center md:hidden '
            whileHover={{
              borderColor: "none",
              backgroundColor: "#3d3d3d",
            }}
            transition={{
              duration: 0.1,
            }}
          >
            <BackIcon />
          </motion.button>
          <form
            action=''
            className='flex-1 flex relative '
            ref={inputRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`border-[1px] rounded-l-[40px] flex-1 
                pr-[4px] ml-[32px] h-[40px] flex items-center
                ${isFocused ? "border-[#1c62b9]" : "pl-[16px] border-[#303030]"}
                `}
              ref={searchRef}
              onFocus={() => {
                setIsFocused(true);
              }}
            >
              {isFocused && (
                <div className='pl-[16px] pr-[12px]'>
                  <SearchIcon size='20' />
                </div>
              )}
              <input
                type='text'
                className=' bg-transparent flex-1 outline-none text-white w-full'
                placeholder='Tìm kiếm'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div
                className='w-[31px] h-[24px] px-[2px] flex items-center'
                style={{
                  filter: "invert(100%)",
                }}
              >
                <img
                  src='//www.gstatic.com/inputtools/images/tia.png'
                  className='px-[4px]'
                />
              </div>
            </div>

            {/* Search history */}
            {isFocused && (
              <div className='min-w-[260px] w-full-minus-32 absolute left-[32px] top-[110%] rounded-[12px] bg-[#212121]'>
                <ul className='pt-[16px] pb-[8px]'>
                  {fakeHistory
                    .slice(
                      Math.min(
                        Math.max(fakeHistory.length - 10, 0),
                        fakeHistory.length
                      )
                    )
                    .map((item, index) => (
                      <li
                        key={index}
                        className='pl-[16px] pr-[24px] h-[32px] flex items-center justify-between hover:bg-hover-black cursor-pointer'
                        onClick={(e) => {
                          setInputValue(item.content);
                        }}
                      >
                        <div className='flex gap-[14px]'>
                          <img
                            src='data:image/svg+xml;base64, PHN2ZyBmaWxsPSIjZjFmMWYxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi40NzUgMTQuMTI1M0w4LjMzMzMgMTEuNTU4N1Y1LjgzMzY2SDkuOTk5OTdWMTAuNjMzN0wxMy4zNTgzIDEyLjcwODdMMTIuNDc1IDE0LjEyNTNaTTE4LjMzMzMgMTAuMDAwM0MxOC4zMzMzIDE0LjU5MiAxNC41OTE2IDE4LjMzMzcgOS45OTk5NyAxOC4zMzM3QzUuNDA4MyAxOC4zMzM3IDEuNjY2NjMgMTQuNTkyIDEuNjY2NjMgMTAuMDAwM0gyLjQ5OTk3QzIuNDk5OTcgMTQuMTMzNyA1Ljg2NjYzIDE3LjUwMDMgOS45OTk5NyAxNy41MDAzQzE0LjEzMzMgMTcuNTAwMyAxNy41IDE0LjEzMzcgMTcuNSAxMC4wMDAzQzE3LjUgNS44NjY5OSAxNC4xMzMzIDIuNTAwMzMgOS45OTk5NyAyLjUwMDMzQzcuMzQxNjMgMi41MDAzMyA0LjkzMzMgMy44NjY5OSAzLjU2NjYzIDYuMTUwMzNDMy40NzQ5NyA2LjMwMDMzIDMuMzgzMyA2LjQ1ODY2IDMuMzA4MyA2LjYxNjk5QzMuMjk5OTcgNi42MzM2NiAzLjI5MTYzIDYuNjUwMzMgMy4yODMzIDYuNjY2OTlINi42NjY2M1Y3LjUwMDMzSDEuNjMzM1YyLjUwMDMzSDIuNDY2NjNWNi40NTAzM0MyLjQ5OTk3IDYuMzc1MzMgMi41MjQ5NyA2LjMwODY2IDIuNTU4MyA2LjI0MTk5QzIuNjQ5OTcgNi4wNTg2NiAyLjc0OTk3IDUuODkxOTkgMi44NDk5NyA1LjcxNjk5QzQuMzQ5OTcgMy4yMTY5OSA3LjA5MTYzIDEuNjY2OTkgOS45OTk5NyAxLjY2Njk5QzE0LjU5MTYgMS42NjY5OSAxOC4zMzMzIDUuNDA4NjYgMTguMzMzMyAxMC4wMDAzWiIvPjwvc3ZnPg=='
                            alt=''
                            width='20px'
                            height='20px'
                            className='fill-[#ffffff]'
                          />
                          <span className='font-[600]'>{item.content}</span>
                        </div>
                        <button className='text-[13px] text-[#3ea6ff] hover:underline'>
                          Remove
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </form>
          <button
            title='Tìm kiếm'
            type='submit'
            onClick={handleSearch}
            className='px-[6px] py-[1px] border-[1px] border-[#303030] 
            bg-[#222222] w-[64px] h-[40px]  
            rounded-r-[40px] flex items-center justify-center'
          >
            <SearchIcon />
          </button>
          <motion.button
            type='button'
            title='Tìm kiếm bằng giọng nói'
            className='w-[40px] h-[40px] rounded-full hidden xsm:flex items-center 
            justify-center md:border-[1px] border-[#303030] md:bg-[#222222] ml-[4px] md:ml-[12px] '
            whileHover={{
              borderColor: "none",
              backgroundColor: "#3d3d3d",
            }}
            transition={{
              duration: 0.1,
            }}
          >
            <MicIcon />
          </motion.button>
        </div>
        <div className='w-full flex md:hidden justify-end'>
          <motion.button
            title='Tìm kiếm'
            type='submit'
            onClick={() => {
              setOpened("search");
              searchRef.current.focus();
              inputRef.current.focus();
            }}
            className=' w-[40px]  h-[40px] rounded-full
            flex items-center justify-center '
            whileHover={{
              borderColor: "none",
              backgroundColor: "#3d3d3d",
            }}
            transition={{
              duration: 0.1,
            }}
          >
            <SearchIcon />
          </motion.button>
          <motion.button
            type='button'
            title='Tìm kiếm bằng giọng nói'
            className='w-[40px] h-[40px] rounded-full hidden sm:flex  items-center 
            justify-center mx-[8px] '
            whileHover={{
              borderColor: "none",
              backgroundColor: "#3d3d3d",
            }}
            transition={{
              duration: 0.1,
            }}
          >
            <MicIcon />
          </motion.button>
        </div>
      </div>
      <div className='sm:min-w-[140px] md:min-w-[225px] flex justify-end sm:gap-[8px]'>
        <motion.button
          className='min-w-[40px] h-[40px] rounded-full flex items-center justify-center'
          whileHover={{
            backgroundColor: "#3d3d3d",
          }}
          transition={{
            duration: 0.1,
          }}
          title='Tạo'
        >
          <CreateVideoIcon />
        </motion.button>
        <motion.button
          className='min-w-[40px] h-[40px] rounded-full hidden sm:flex items-center justify-center relative'
          whileHover={{
            backgroundColor: "#3d3d3d",
          }}
          transition={{
            duration: 0.1,
          }}
          onClick={() => {
            setOpened((prev) => (prev === "notify" ? "" : "notify"));
          }}
        >
          <div title='Thông báo'>
            <BellIcon />
            <span
              className='absolute top-[5px] right-[-1px] bg-red-CC text-white text-[12px] px-[4px] 
                rounded-[22px] border-transparent'
            >
              9+
            </span>
          </div>
          {opened === "notify" && <NotificationBox setOpened={setOpened} />}
        </motion.button>
        <button
          className='flex items-center justify-center px-[6px] py-[1px] w-[60px] relative'
          onClick={() => {
            setOpened((prev) => (prev === "setting" ? "" : "setting"));
          }}
        >
          <img
            draggable='false'
            alt='Hình ảnh đại diện'
            height='32px'
            width='32px'
            src={MyChannel}
            className='rounded-full w-[32px] h-[32px]'
          />
          {opened === "setting" && <AccountSetting setOpened={setOpened} />}
        </button>
      </div>
    </header>
  );
};
export default Header;
