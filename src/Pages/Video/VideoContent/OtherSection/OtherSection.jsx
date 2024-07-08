import { ShortVids, CardRow } from "../../../../Component";
import { useState, useRef } from "react";
import { vidList2 as mockList } from "../../../../Mock Data/videoData";

const mockShortList = Array.from({ length: 15 }, (_, i) => i + 1);

const OtherSection = ({ openedMenu, vidList, shortList }) => {
  const vidsRowsArr = useRef(Array.from({ length: 2 }, (_, i) => i));

  const [showQtt, setShowQtt] = useState(1);

  const [showCard, setShowCard] = useState(1);

  const handleResizeShort = () => {
    if (window.innerWidth < 426) {
      setShowQtt(1);
    } else if (window.innerWidth < 640) {
      setShowQtt(2);
    } else if (window.innerWidth < 938) {
      setShowQtt(3);
    } else if (window.innerWidth < 1024) {
      setShowQtt(4);
    } else if (window.innerWidth < 1436) {
      setShowQtt(3);
    } else if (window.innerWidth < 1536) {
      setShowQtt(4);
    } else if (window.innerWidth < 1760) {
      setShowQtt(5);
    } else if (window.innerWidth < 1976) {
      setShowQtt(6);
    } else if (window.innerWidth < 2086) {
      setShowQtt(7);
    } else if (window.innerWidth < 2386) {
      setShowQtt(8);
    } else setShowQtt(9);
  };

  const handleResizeCard = () => {
    if (window.innerWidth < 768) {
      setShowCard(1);
    } else if (window.innerWidth < 938) {
      setShowCard(2);
    } else if (window.innerWidth < 1024) {
      setShowCard(3);
    } else if (window.innerWidth < 1280) {
      setShowCard(2);
    } else if (window.innerWidth < 1760) {
      setShowCard(3);
    } else if (window.innerWidth < 2086) {
      setShowCard(4);
    } else if (window.innerWidth < 2256) {
      setShowCard(5);
    } else setShowCard(6);
  };

  return (
    <div className='pt-[16px]'>
      <div className='flex flex-col'>
        {vidsRowsArr.current &&
          vidsRowsArr.current.map((item) => (
            <CardRow
              key={item}
              handleResize={handleResizeCard}
              showQtt={showCard}
              openedMenu={openedMenu}
              vidList={(vidList || mockList)?.slice(
                item * showCard,
                item * showCard + showCard
              )}
            />
          ))}
      </div>
      <ShortVids
        openedMenu={openedMenu}
        handleResize={handleResizeShort}
        showQtt={showQtt}
        shortList={shortList || mockShortList}
      />
      <div className='flex flex-col'>
        {vidsRowsArr.current &&
          vidsRowsArr.current.map((item) => (
            <CardRow
              key={item}
              handleResize={handleResizeCard}
              showQtt={showCard}
              openedMenu={openedMenu}
              vidList={(vidList || mockList)?.slice(
                item * showCard,
                item * showCard + showCard
              )}
            />
          ))}
      </div>
      <ShortVids
        openedMenu={openedMenu}
        handleResize={handleResizeShort}
        showQtt={showQtt}
        shortList={shortList || mockShortList}
      />
      <div className='flex flex-col'>
        {vidsRowsArr.current &&
          vidsRowsArr.current.map((item) => (
            <CardRow
              key={item}
              handleResize={handleResizeCard}
              showQtt={showCard}
              openedMenu={openedMenu}
              vidList={(vidList || mockList)?.slice(
                item * showCard,
                item * showCard + showCard
              )}
            />
          ))}
      </div>
    </div>
  );
};
export default OtherSection;
