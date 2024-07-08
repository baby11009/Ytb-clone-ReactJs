import { ThinArrowIcon } from "../../Assets/Icons";
import { useState, useRef, useEffect } from "react";
import CustomeFuncBox from "./CustomeFuncBox";

const CustomeFuncBox2 = ({ funcList, activeId }) => {
  const [opened, setOpened] = useState(false);

  const boxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpened(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside)

    return () => {
        window.removeEventListener('mousedown', handleClickOutside);
    }

  }, []);

  const handleOnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpened((prev) => !prev);
  };

  return (
    <div className='relative' ref={boxRef}>
      <button
        className='h-[32px] flex items-center rounded-[8px] pl-[12px] bg-black-0.1'
        onClick={handleOnClick}
      >
        <span className='text-[14px] leading-[20px] font-[500px]'>
          {activeId.text}
        </span>
        <div className='ml-[4px] mr-[6px] rotate-90'>
          <ThinArrowIcon size={14} />
        </div>
      </button>
      {opened && (
        <CustomeFuncBox
          setOpened={setOpened}
          funcList1={funcList}
          style={"w-[256px]"}
        />
      )}
    </div>
  );
};
export default CustomeFuncBox2;
