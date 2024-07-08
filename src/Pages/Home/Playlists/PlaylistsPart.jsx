import { CustomeFuncBox2, PlaylistRow } from "../../../Component";
import { randomPl1List } from "../../../Mock Data/playlistData";
import { useState, useEffect, useLayoutEffect } from "react";


const PlaylistsPart = ({ openedMenu }) => {
  const [activeId, setActiveId] = useState({
    id: 1,
    text: "A-Z",
  });

  const [showQtt, setShowQtt] = useState(4);

  const [showRows, setShowRows] = useState(1);

  const [vrArr, setVrArr] = useState(
    Array.from({ length: showRows }, (_, i) => i)
  );

  const handleSetActive = (data) => {
    setActiveId({
      id: data.id,
      text: data.text,
    });
  };

  const funcList = [
    {
      id: 1,
      text: "A-Z",
      handleOnClick: handleSetActive,
    },
    {
      id: 2,
      text: "Mới thêm gần đây",
      handleOnClick: handleSetActive,
    },
  ];

  const handleResize = () => {
    if (window.innerWidth < 426) {
      setShowQtt(1);
    } else if (window.innerWidth < 640) {
      setShowQtt(2);
    } else if (window.innerWidth < 1168) {
      setShowQtt(3);
    } else if (window.innerWidth < 1280) {
      setShowQtt(4);
    } else if (window.innerWidth < 1436) {
      if (openedMenu) {
        setShowQtt(3);
      } else setShowQtt(4);
    } else if (window.innerWidth < 1760) {
      if (openedMenu) {
        setShowQtt(4);
      } else setShowQtt(5);
    } else if (window.innerWidth < 2086) {
      if (openedMenu) {
        setShowQtt(5);
      } else setShowQtt(6);
    } else setShowQtt(7);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openedMenu]);

  useLayoutEffect(() => {
    setShowRows(Math.ceil(randomPl1List.length / showQtt));
  }, [showQtt]);

  useLayoutEffect(() => {
    setVrArr(Array.from({ length: showRows }, (_, i) => i));
  }, [showRows]);

  return (
    <div>
      <div className='mx-[24px]'>
        <span className='text-[36px] leading-[50px] font-bold  '>
          Danh sách phát
        </span>
      </div>
      <div className='pt-[16px] px-[24px]'>
        <CustomeFuncBox2 funcList={funcList} activeId={activeId} />
      </div>
      <div className='pt-[24px] mx-[16px] flex justify-center'>
        <div className='flex flex-col'>
          {vrArr?.map((item) => (
            <PlaylistRow
              key={item}
              plList={randomPl1List.slice(
                item * showQtt,
                item * showQtt + showQtt
              )}
              showQtt={showQtt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PlaylistsPart;
