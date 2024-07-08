import PlayListCard from "./PlayListCard";
import {  useLayoutEffect, useState } from "react";

const PlaylistRow = ({ plList, showQtt }) => {

  const [vrArr, setVrArr] = useState([]);

  useLayoutEffect(() => {
    setVrArr(Array.from({ length: showQtt - plList.length }, (_, i) => i));
  }, [showQtt]);

  return (
    <div className='flex'>
      {plList.map((item) => (
        <PlayListCard key={item.id} data={item} showL3={true} />
      ))}
      {vrArr.map((item) => (
        <div className='flex-1' key={item}></div>
      ))}
    </div>
  );
};
export default PlaylistRow;
