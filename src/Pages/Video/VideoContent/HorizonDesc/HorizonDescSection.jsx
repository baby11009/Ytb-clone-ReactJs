import { useState, useRef } from "react";

import HorizonVidInfor from "./HorizonVidInfor";
import HorizonDesCmt from "./HorizonDesCmt";
import CommentBox from "./CommentBox";

const HorizonDescSection = ({ sub }) => {
  const [opened, setOpened] = useState("");

  const [subbed, setSubbed] = useState(sub);

  const time = "06/14/2024, 11:20:32 AM";

  return (
    <div className='lg:hidden mt-[12px] mb-[24px]'>
      {opened === "cmt" ? (
        <CommentBox setOpened={setOpened}/>
      ) : (
        <>
          {/* Video Information */}

          <HorizonVidInfor
            opened={opened}
            setOpened={setOpened}
            subbed={subbed}
            setSubbed={setSubbed}
          />

          {/* Description & Comment */}
          <HorizonDesCmt opened={opened} setOpened={setOpened} time={time} />
        </>
      )}
    </div>
  );
};
export default HorizonDescSection;
