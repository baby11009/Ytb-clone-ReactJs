import ChannelInfor from "./ChannelInfor/ChannelInfor";
import ChannelDisplay from "./ChannelContents/ChannelDisplay";
import { useState } from "react";
import { banner1, tgbBig } from "../../../Assets/Images";

const ChannelPart = ({ openedMenu }) => {

  const [display,setDisplay] = useState({
    title : 'home',
    payload : undefined,
  })


  return (
    <div className='flex flex-col items-center justify-center'>
      <ChannelInfor
        banner={banner1}
        channelImg={tgbBig}
        name={'Thầy giáo Ba'}
        sub={true}
        openedMenu={openedMenu}
        display={display}
        setDisplay={setDisplay}
      />
      <ChannelDisplay openedMenu={openedMenu} display={display}/>
    </div>
  );
};
export default ChannelPart;
