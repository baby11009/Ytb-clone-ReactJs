import HomeContent from "./HomeContent";
import ComunityContent from "./ComunityContent";
import { listLists1 } from "../../../../Mock Data/listListsData";

const DisplayContent = ({ openedMenu, activeId }) => {
  return (
    <div
      className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]
        ${
          openedMenu
            ? "1336:w-[1070px] 2xl:w-[1284px]"
            : " 2lg:w-[1070px] 1-5xl:w-[1284px]"
        } 
        `}
    >
      {activeId === 0 ? <HomeContent data={listLists1} /> : <ComunityContent />}
    </div>
  );
};
export default DisplayContent;
