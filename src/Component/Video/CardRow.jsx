import VideoCard from "./VideoCard";
import PlayListCard from "../Playlist/PlayListCard";
import { useLayoutEffect, useState } from "react";

const CardRow = ({ vidList, handleResize, showQtt, openedMenu, showBtn }) => {
  const [vrArr, setVrArr] = useState([]);

  useLayoutEffect(() => {
    setVrArr(Array.from({ length: showQtt - vidList?.length }, (_, i) => i));
  }, [showQtt]);

  useLayoutEffect(() => {
    // Function to update state with current window width
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [openedMenu]);

  return (
    <div className='flex '>
      {vidList?.map((item) => {
        if (item.type.title === "playlist") {
          return <PlayListCard data={item} key={item.id} />;
        }
        return (
          <VideoCard
            data={item}
            key={item.id}
            showBtn={showBtn}
            descStyle={"!hidden"}
            funcBoxPos={item.id % showQtt === 0 && "sm:right-[20%]"}
          />
        );
      })}
      {vrArr.map((item) => (
        <div className='flex-1' key={item}></div>
      ))}
    </div>
  );
};
export default CardRow;
