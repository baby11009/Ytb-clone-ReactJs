import { useQuery } from "../../../util/path";
import { useState } from "react";
import Header from "./NewsContent/Header";
import DisplayContent from "./NewsContent/DisplayContent";
import { vidList3 } from "../../../Mock Data/videoData";

const NewsPart = ({ openedMenu }) => {
  const [data, setData] = useState([]);

  let query = useQuery().get("tag");

  const [activeId, setActiveId] = useState(0);

  return (
    <div className='flex justify-center pb-[200px]'>
      <div className='w-full max-w-[3096px] mx-[24px]'>
        <Header activeId={activeId} setActiveId={setActiveId} />
        <DisplayContent data={vidList3} openedMenu={openedMenu} />
      </div>
    </div>
  );
};
export default NewsPart;
