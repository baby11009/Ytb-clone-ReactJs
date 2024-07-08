import TagBlock from "../TagBlock";
import { useState, useEffect } from "react";
import VideoList from "./VideoList";
import { IsEnd, IsTop } from "../../../../../util/scrollPosition";

const ChannelVideo = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const [isEnd, setIsEnd] = useState(false);

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      IsEnd(setIsEnd);
      IsTop(setIsTop);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        IsEnd(setIsEnd);
        IsTop(setIsTop);
      });
    };
  }, []);

  return (
    <div className='w-full'>
      <TagBlock activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <VideoList isEnd={isEnd} isTop={isTop}/>
    </div>
  );
};
export default ChannelVideo;
