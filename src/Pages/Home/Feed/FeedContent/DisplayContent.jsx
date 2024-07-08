import { VideoCard, CannotWatch } from "../../../../Component";

const DisplayContent = ({ data }) => {
  if (!data) {
    return (
      <div className='pt-[140px] mb-[40px]'>
        <CannotWatch />
      </div>
    );
  }

  return (
    <div className='mt-[24px]'>
      {data?.map((item, index) => {
        if (item.type.title !== "playlist") {
          return (
            <div className='w-full max-w-[862px]' key={index}>
              <VideoCard
                data={item}
                noFunc2={true}
                showLive={item.type.title === "live"}
                style={"flex gap-[16px] mx-0 mb-[16px]"}
                thumbStyle={"w-[246px] h-[138px] mb-0 rounded-[8px]"}
                titleStyle={
                  "text-[18px] leading-[26px] font-[400] max-h-[56px]"
                }
                infoStyle={"flex text-[12px] leading-[18px]"}
                imgStyle={"hidden"}
                liveStyle={"hidden"}
              />
            </div>
          );
        }
      })}
    </div>
  );
};
export default DisplayContent;
