import { Link } from "react-router-dom";
import { formatNumber } from "../../util/numberFormat";
import { Setting2Icon, FeedBackIcon } from "../../Assets/Icons";
import { motion } from "framer-motion";
import CustomeFuncBox from "../Box/CustomeFuncBox";
import { useState, useEffect, useRef } from "react";

const view = 120000;

const funcList1 = [
  {
    id: 1,
    text: "Gửi ý kiến phản hồi",
    icon: <FeedBackIcon />,
  },
];

const ShortCard = ({ data, containerStyle, funcBoxPos }) => {
  const [opened, setOpened] = useState(false);

  const containRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containRef.current && !containRef.current.contains(event.target)) {
        setOpened("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Link
      to={`/short/${data.id}`}
      className={`flex-1 mx-[8px] mb-[20px] cursor-pointer inline-block ${containerStyle}`}
    >
      <div className='rounded-[12px] overflow-hidden w-full'>
        <img src={data.img} alt='short' className='w-full' />
      </div>
      <div className='pt-[12px] flex'>
        <div>
          <div className=' text-[16px] leading-[22px]'>
            <h3 className='t-ellipsis '>{data.title}</h3>
          </div>
          <div className='text-[14px] leading-[20px] text-gray-A'>
            {formatNumber(data.view || view)} lượt xem
          </div>
        </div>
        <motion.div
          className='w-[24px] h-[24px] rounded-[50%] relative'
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setOpened(true);
          }}
          whileTap={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
          ref={containRef}
        >
          <Setting2Icon />

          {opened && (
            <CustomeFuncBox
              style={`w-[210px] top-[100%] right-[20%] ${
                funcBoxPos ? funcBoxPos : "sm:left-[-20%]"
              } `}
              setOpened={setOpened}
              funcList1={funcList1}
            />
          )}
        </motion.div>
      </div>
    </Link>
  );
};
export default ShortCard;
