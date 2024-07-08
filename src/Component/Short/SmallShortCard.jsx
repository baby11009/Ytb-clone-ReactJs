import { useState, useEffect, useRef } from "react";
import {
  LaterIcon,
  PlayListIcon,
  Setting2Icon,
  Verification,
} from "../../Assets/Icons";
import { motion, useAnimate } from "framer-motion";
import { Link } from "react-router-dom";
import { formatNumber } from "../../util/numberFormat";
import { timeFormat } from "../../util/timeforMat";
import { durationCalc } from "../../util/durationCalc";

const HoverButton = ({ title, icon }) => {
  const [scope, animate] = useAnimate();

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (scope.current) {
      if (hovered) {
        animate(
          scope.current,
          {
            backgroundColor: "rgba(0, 0, 0,1)",
          },
          {
            duration: 0,
            type: "tween",
          }
        );
        animate(
          "h3",
          {
            transform: "translateX(0)",
          },
          {
            duration: 0.2,
            delay: 0.4,
            type: "tween",
          }
        );
      } else {
        animate(
          scope.current,
          {
            backgroundColor: "rgba(0, 0, 0,.8)",
          },
          {
            duration: 0,
            type: "tween",
          }
        );
        animate(
          "h3",
          {
            transform: "translateX(100%)",
          },
          {
            duration: 0.3,
            type: "tween",
          }
        );
      }
    }
  }, [hovered]);

  return (
    <motion.button
      className={`m-[8px] w-[28px] h-[28px] bg-[rgba(0,0,0,.8)] rounded-[4px]
      flex items-center justify-center relative z-[20]`}
      ref={scope}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className='block overflow-hidden absolute right-[24px] rounded-l-[4px] 
          text-nowrap text-[12px] leading-[28px] font-[500]'
      >
        <h3 className='translate-x-[100%] bg-[#000000] pl-[8px] pr-[6px]'>
          {title}
        </h3>
      </div>
      <div onMouseEnter={() => setHovered(true)}>{icon}</div>
    </motion.button>
  );
};

const SmallShortCard = ({ style, data }) => {
  const [showed, setShowed] = useState(false);

  return (
    <Link
      to={`/short/${2}`}
      style={style}
      className='relative'
      onMouseOver={() => {
        setShowed(true);
      }}
      onMouseOut={() => {
        setShowed(false);
      }}
    >
      <div className='relative'>
        <img src={data.thumb} alt='thumb' className='rounded-[8px]' />
        <div
          className='absolute bottom-0 right-0 bg-[rgba(0,0,0,0.6)] text-white px-[4px] py-[1px] 
        mr-[4px] mb-[4px] text-[12px] leading-[18px] rounded-[4px]'
        >
          <span>{durationCalc(data.duration)}</span>
        </div>
      </div>

      <div className='relative'>
        <div className='pr-[24px]'>
          <div className='t-ellipsis text-[14px] leading-[20px] h-[40px] font-[500] my-[8px]'>
            {data.title}
          </div>

          <div className='text-[12px] leading-[18px] text-gray-A'>
            <div className='flex items-center gap-[4px]'>
              <span className='hover:text-white-F1' title={data.channel.name}>
                {data.channel.name}
              </span>
              <div>
                <Verification size={14} />
              </div>
            </div>

            <div>
              <span>{formatNumber(data.view)}</span>
              <span className='px-[4px]'>•</span>
              <span>{timeFormat(data.time)}</span>
            </div>
          </div>
        </div>

        <motion.div
          className='absolute w-[40px] h-[40px] rounded-[50%] right-0 translate-x-[30%] 
          top-0 flex items-center justify-center'
          whileTap={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <Setting2Icon />
        </motion.div>
      </div>

      {showed && (
        <div className='absolute right-0 top-0'>
          <HoverButton title={"Xem sau"} icon={<LaterIcon />} />
          <HoverButton
            title={"Thêm vào danh sách chờ"}
            icon={<PlayListIcon />}
          />
        </div>
      )}
    </Link>
  );
};
export default SmallShortCard;
