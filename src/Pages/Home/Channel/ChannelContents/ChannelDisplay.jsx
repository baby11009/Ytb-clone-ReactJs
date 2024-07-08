import ChannelHome from "./Home/ChannelHome";
import ChannelVideo from "./Video/ChannelVideo";
import ChannelShort from "./Short/ChannelShort";
import ChannelLive from "./Live/ChannelLive";
import ChannelPlaylist from "./Playlist/ChannelPlaylist";
import ChannelComunity from "./Comunity/ChannelComunity";
import ChannelSearch from "./Search/ChannelSearch";

const ChannelDisplay = ({ openedMenu, display }) => {
  return (
    <div
      className={`w-[214px] xsm:w-[428px] sm:w-[642px] 2md:w-[856px]  
      ${
        openedMenu
          ? "1336:w-[1070px] xl 2xl:w-[1284px]"
          : "2lg:w-[1070px] 1-5xl:w-[1284px]"
      }`}
    >
      {display.title === "home" ? (
        <ChannelHome />
      ) : display.title === "video" ? (
        <ChannelVideo />
      ) : display.title === "short" ? (
        <ChannelShort />
      ) : display.title === "live" ? (
        <ChannelLive />
      ) : display.title === "playlist" ? (
        <ChannelPlaylist />
      ) : display.title === "comunity" ? (
        <ChannelComunity />
      ) : (
        <ChannelSearch searchValue={display.payload}/>
      )}
    </div>
  );
};
export default ChannelDisplay;
