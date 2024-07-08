import { useState, useLayoutEffect } from "react";
import { useQuery } from "../../../util/path";

import Header from "./FeedContent/Header";
import DisplayContent from "./FeedContent/DisplayContent";
import {
  vidList1,
  vidList2,
  vidList3,
  vidList4,
} from "../../../Mock Data/videoData";

const FeedPart = ({ openedMenu, id }) => {
  const [data, setData] = useState([]);

  let query = useQuery().get("tag");

  const [activeId, setActiveId] = useState(0);

  useLayoutEffect(() => {
    switch (query) {
      case "latest":
        setData(vidList1);
        break;
      case "music":
        setData(vidList2);
        break;
      case "game":
        setData(vidList3);
        break;
      case "movie":
        setData(vidList4);
        break;
      default:
        setData(vidList1);
    }
  }, [query]);

  return (
    <div className='flex justify-center'>
      <div
        className={`
    w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]  
    ${
      openedMenu
        ? "1336:w-[1070px] xl 2xl:w-[1284px]"
        : "2lg:w-[1070px] 1-5xl:w-[1284px]"
    }`}
      >
        <Header activeId={activeId} setActiveId={setActiveId} />
        <DisplayContent data={data} />
      </div>
    </div>
  );
};
export default FeedPart;
