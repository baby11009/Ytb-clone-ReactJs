import { ChannelCard } from "../../../Component";
import { channelList } from "../../../Mock Data/channelData";

const SubscribeChannel = ({ openedMenu }) => {
  return (
    <div className='flex justify-center pb-[100px]'>
      <div
        className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]  
        ${
          openedMenu
            ? "1336:w-[1070px] xl 2xl:w-[1284px]"
            : "2lg:w-[1070px] 1-5xl:w-[1284px]"
        }`}
      >
        <div className='flex flex-col items-start'>
          {channelList.map((item) => (
            <ChannelCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SubscribeChannel;
