import MainLayOut from "../../Layout/MainLayOut";
import { Header, Body } from "../../Component";
import { useState } from "react";
import VideoPart from "./VideoContent/VideoPart";

const VideoPage = () => {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <MainLayOut style={{}}>
      <Header setOpenedMenu={setOpenedMenu} />
      <Body
        openedMenu={openedMenu}
        setOpenedMenu={setOpenedMenu}
        RenderContent={<VideoPart openedMenu={openedMenu} />}
        noLDMenu={true}
        noIconMenu={true}
      />
    </MainLayOut>
  );
};
export default VideoPage;
