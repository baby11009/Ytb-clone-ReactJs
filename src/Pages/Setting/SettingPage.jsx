import MainLayOut from "../../Layout/MainLayOut";
import { Header, Body } from "../../Component";
import { useState } from "react";
import SettingPart from "./SettingPart/SettingPart";

const SettingPage = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  return (
    <MainLayOut style={{}}>
      <Header setOpenedMenu={setOpenedMenu} />
      <Body
        openedMenu={openedMenu}
        setOpenedMenu={setOpenedMenu}
        RenderContent={<SettingPart openedMenu={openedMenu}/>}
        noLDMenu={true}
        noIconMenu={true}
      />
    </MainLayOut>
  );
};
export default SettingPage;
