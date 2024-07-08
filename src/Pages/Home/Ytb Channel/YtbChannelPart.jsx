import { useState, useLayoutEffect } from "react";
import Carousel from "./Carousel/Carousel";
import DisplayContent from "./Content/DisplayContent";
import {
  ytbMusicChannel,
  ytbSportChannel,
} from "../../../Mock Data/channelData";
import { useParams } from "react-router-dom";

const YtbChannelPart = ({ openedMenu }) => {
  const [activeId, setActiveId] = useState(0);

  const { id } = useParams();

  const [data, setData] = useState(undefined);

  useLayoutEffect(() => {
    switch (id) {
      case "music":
        setData(ytbMusicChannel);
        break;
      case "sport":
        setData(ytbSportChannel);
        break;
      default:
        setData(ytbMusicChannel);
    }
  }, [id]);

  if (!data) {
    return "loading";
  }

  return (
    <div>
      <Carousel
        openedMenu={openedMenu}
        data={data}
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <div className='flex justify-center'>
        <DisplayContent openedMenu={openedMenu} activeId={activeId} />
      </div>
    </div>
  );
};
export default YtbChannelPart;
