import VideoSection from "./VideoSection/VideoSection";
import DescSection from "./VerticalDesc/DescSection";
import OtherSection from "./OtherSection/OtherSection";
import HorizonDescSection from "./HorizonDesc/HorizonDescSection";

const VideoPart = ({ openedMenu }) => {
  return (
    <div className='flex xl:px-[1.75%] 2xl:px-[2.5%] 3xl:px-[3%] 4xl:px-[3.5%] 5xl:px-[10%]'>
      <div className='flex '>
        <div className='flex-1 pl-[16px] pr-[8px]'>
          {/* Video section */}
          <VideoSection />
          {/* Other content section */}
          <HorizonDescSection sub={true} />
          <OtherSection openedMenu={openedMenu} />
        </div>
        {/*  */}

        <div className='hidden w-[410px] xl:w-[480px] min-h-screen-w-minus-74 lg:block ml-[8px] '></div>
        <div
          className='hidden lg:inline-block fixed right-0 xl:right-[1.75%] 
          2xl:right-[2.5%] 3xl:right-[3%] 4xl:right-[3.5%] 5xl:right-[10%] top-[56px] ml-[8px]'
        >
          <DescSection sub={true} />
        </div>
      </div>
    </div>
  );
};
export default VideoPart;
