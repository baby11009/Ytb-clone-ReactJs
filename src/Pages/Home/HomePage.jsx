import { useState, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import MainLayOut from "../../Layout/MainLayOut";
import { Body, Header } from "../../Component";
import { scrollToTop } from "../../util/scrollCustom";

import MainPart from "./Main/MainPart";
import ShortPart from "./Short/ShortPart";
import ChannelPart from "./Channel/ChannelPart";
import PostPart from "./Comunity Post/PostPart";
import SubscribeContentPart from "./Subscribe Content/SubscribeContentPart";
import SubscribeChannel from "./Subscribe Content/SubscribeChannel";
import WatchedPart from "./Watched/WatchedPart";
import PlaylistsPart from "./Playlists/PlaylistsPart";
import PlaylistPart from "./Playlist/PlaylistPart";
import YtbChannelPart from "./Ytb Channel/YtbChannelPart";
import FeedPart from "./Feed/FeedPart";
import NewsPart from "./News/NewsPart";
import GamingPart from "./Gaming/GamingPart";

const HomePage = () => {
  const params = useParams();

  const [openedMenu, setOpenedMenu] = useState(false);

  const [renderComponent, setRenderComponent] = useState(undefined);

  const componentMap = useRef();

  componentMap.current = {
    main: <MainPart openedMenu={openedMenu} />,
    short: <ShortPart/>,
    channel: <ChannelPart openedMenu={openedMenu} />,
    post: <PostPart openedMenu={openedMenu} />,
    "sub-content": <SubscribeContentPart openedMenu={openedMenu} />,
    "sub-channels": <SubscribeChannel openedMenu={openedMenu} />,
    watched: <WatchedPart openedMenu={openedMenu} />,
    playlists: <PlaylistsPart openedMenu={openedMenu} />,
    playlist: <PlaylistPart id={params?.id} />,
    "ytb-channel": <YtbChannelPart openedMenu={openedMenu} />,
    feed: <FeedPart openedMenu={openedMenu} id={params?.id} />,
    news: <NewsPart openedMenu={openedMenu} />,
    gaming: <GamingPart openedMenu={openedMenu} />,
  };

  useLayoutEffect(() => {
    if (params.path) {
      setRenderComponent(componentMap.current[params.path]);
      scrollToTop();
    } else setRenderComponent(componentMap.current["main"]);
  }, [params, openedMenu]);

  return (
    <MainLayOut>
      <Header setOpenedMenu={setOpenedMenu} />
      <Body
        openedMenu={openedMenu}
        setOpenedMenu={setOpenedMenu}
        RenderContent={renderComponent}
      />
    </MainLayOut>
  );
};
export default HomePage;
