import { useState, useLayoutEffect, useRef } from "react";
import { scrollToTop } from "../../../../util/scrollCustom";
import Account from "./Account";
import Notifications from "./Notifications";
import Playback from "./Playback";
import Download from "./Download";
import Privacy from "./Privacy";
import Sharing from "./Sharing";
import Billing from "./Billing";
import Advanced from "./Advanced";

const DisplayContent = ({ id }) => {
  const [renderComponent, setRenderComponent] = useState(undefined);

  const componentMap = useRef();

  componentMap.current = {
    account: <Account />,
    notifications: <Notifications />,
    playback: <Playback />,
    downloads: <Download />,
    privacy: <Privacy />,
    sharing: <Sharing />,
    billing: <Billing />,
    advanced: <Advanced />,
  };

  useLayoutEffect(() => {
    if (id) {
      setRenderComponent(componentMap.current[id]);
      scrollToTop();
    }
  }, [id]);

  return (
    <div className='1-5sm:pl-[240px] flex justify-center'>
      <div className='w-full max-w-[1080px] px-[32px] mb-[16px] overflow-hidden'>
        {renderComponent}
      </div>
    </div>
  );
};
export default DisplayContent;
