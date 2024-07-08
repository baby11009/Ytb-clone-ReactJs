import LeftMenu from "./Menu/LeftMenu";
import SDLeftMenu from "./Menu/SDLeftMenu";
import { useParams, useLocation } from "react-router-dom";

const Body = ({
  openedMenu,
  setOpenedMenu,
  RenderContent,
  containerStyle,
  noLDMenu,
  noIconMenu,
}) => {

  const location = useLocation();

  return (
    <div className={`pt-[56px] ${containerStyle}`}>
      {/* Large device Left Menu */}
      {!noLDMenu && (
        <div className='hidden xl:block'>
          <LeftMenu
            openedMenu={openedMenu}
            setOpenedMenu={setOpenedMenu}
            path={location.pathname}
          />
        </div>
      )}
      {/* Small device left menu */}
      <div className={`${!noLDMenu && " xl:hidden"} z-[2]`}>
        <SDLeftMenu
          openedMenu={openedMenu}
          setOpenedMenu={setOpenedMenu}
          noIconMenu={noIconMenu}
          path={location.pathname}
        />
      </div>
      <div
        className={`
           
          ${!noLDMenu && "md:ml-[74px]"}
          ${openedMenu && !noLDMenu && " xl:ml-[240px]"} 
          `}
      >
        {RenderContent}
      </div>
    </div>
  );
};
export default Body;
