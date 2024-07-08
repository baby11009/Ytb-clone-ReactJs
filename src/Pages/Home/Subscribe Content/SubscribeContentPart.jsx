import { ThickGridIcon, EmptyGridIcon, ListIcon } from "../../../Assets/Icons";
import { Link } from "react-router-dom";

import { useState } from "react";

import { GridLayout, ListLayout } from "../../../Component";

import { vidList1 } from "../../../Mock Data/videoData";
import { shortList1 } from "../../../Mock Data/shortData";

const SubscribeContentPart = ({ openedMenu }) => {
  const [layout, setLayout] = useState("grid");

  return (
    <div>
      {layout === "grid" && (
        <div className='pt-[24px] m-[24px] flex items-center justify-between'>
          <span className='text-[20px] leading-[20px] font-bold'>Mới nhất</span>
          <div className='flex items-center h-[20px]'>
            <Link
              className='px-[16px] rounded-[18px] hover:bg-[#263850] cursor-pointer'
              to={`/sub-channels`}
            >
              <span className=' text-nowrap text-[14px] leading-[36px] font-[500] text-blue-3E'>
                Quản lý
              </span>
            </Link>

            <div
              className='w-[40px] h-[40px] rounded-[50%] hover:bg-black-0.2 flex items-center justify-center cursor-pointer'
              onClick={() => setLayout("grid")}
            >
              {layout === "grid" ? <ThickGridIcon /> : <EmptyGridIcon />}
            </div>
            <div
              className='w-[40px] h-[40px] rounded-[50%] hover:bg-black-0.2 flex items-center justify-center cursor-pointer'
              onClick={() => setLayout("list")}
            >
              <ListIcon />
            </div>
          </div>
        </div>
      )}

      <div className='mx-[16px]'>
        {layout === "grid" ? (
          <GridLayout
            openedMenu={openedMenu}
            vidList={vidList1}
            shortList={shortList1}
          />
        ) : (
          <ListLayout
            openedMenu={openedMenu}
            vidList={vidList1}
            shortList={shortList1}
            layout={layout}
            setLayout={setLayout}
          />
        )}
      </div>
    </div>
  );
};
export default SubscribeContentPart;
