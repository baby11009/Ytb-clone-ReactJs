import { Link } from "react-router-dom";
import {
  HomeIcon,
  ActiveHomeIcon,
  ShortIcon,
  ActiveShortIcon,
  SubChannelIcon,
  ActiveSubChannelIcon,
  MyChannelIcon,
  WatchedIcon,
  ActiveWatchedIcon,
  PlayListIcon,
  ActivePlayListIcon,
  MyVideoIcon,
  LaterIcon,
  ActiveLaterIcon,
  LikedIcon,
  CutIcon,
  ActiveCutIcon,
  PopularIcon,
  ActivePopularIcon,
  MusicIcon,
  ActiveMusicIcon,
  GameIcon,
  ActiveGameIcon,
  NewsIcons,
  ActiveNewsIcon,
  SportIcon,
  ActiveSportIcon,
  YoutubePremiumIcon,
  YoutubeMusicIcon,
  YoutubeStudioIcon,
  YoutubeKidIcon,
  SettingIcon,
  ActiveSettingIcon,
  DiaryIcon,
  ActiveDiaryIcon,
  HelpIcon,
  FeedBackIcon,
  MyChannel2Icon,
  ActiveMyChannel2Icon,
  ActiveLikedIcon,
} from "../../../Assets/Icons";

import {
  iloda,
  levi,
  sangtraan,
  llstylish,
  theanh,
  tgb,
  zeros,
  bauffs,
  vuive,
  asoken,
} from "../../../Assets/Images";

export const channelList = [
  {
    id: 1,
    name: "iLoda",
    img: iloda,
    state: 2,
  },
  {
    id: 2,
    name: "Levi",
    img: levi,
    state: 2,
  },
  {
    id: 3,
    name: "sangtraan",
    img: sangtraan,
    state: 0,
  },
  {
    id: 4,
    name: "LL Stylish",
    img: llstylish,
    state: 1,
  },
  {
    id: 5,
    name: "TheAnh96",
    img: theanh,
    state: 1,
  },
  {
    id: 6,
    name: "Thầy Giáo Ba",
    img: tgb,
    state: 1,
  },
  {
    id: 7,
    name: "Zeros",
    img: zeros,
    state: 0,
  },
  {
    id: 8,
    name: "Thebausffs",
    img: bauffs,
    state: 1,
  },
  {
    id: 9,
    name: "Vui vẻ",
    img: vuive,
    state: 1,
  },
  {
    id: 10,
    name: "Asoken",
    img: asoken,
    state: 0,
  },
];

export const footerList1 = [
  "Giới thiệu",
  "Báo chí",
  "Bản quyền",
  "Liên hệ với chúng tôi",
  "Người sáng tạo",
  "Quảng cáo",
  "Nhà phát triển",
];

export const footerList2 = [
  "Điều khoản",
  "Quyền riêng tư",
  "Chính sách và an toàn",
  "Cách YouTube hoạt động",
  "Thử các tính năng mới",
];

export const funcList1 = [
  {
    id: 1,
    title: "Trang chủ",
    path: "/",
    icon: <HomeIcon />,
    activeIcon: <ActiveHomeIcon />,
  },
  {
    id: 2,
    title: "Shorts",
    path: "/short/1",
    icon: <ShortIcon />,
    activeIcon: <ActiveShortIcon />,
  },
  {
    id: 3,
    title: "Kênh đăng ký",
    path: "/sub-content",
    icon: <SubChannelIcon />,
    activeIcon: <ActiveSubChannelIcon />,
  },
  {
    id: 4,
    title: "Bạn",
    path: "/me",
    activeIcon: <ActiveMyChannel2Icon />,
    icon: <MyChannel2Icon />,
  },
];

export const funcList2 = [
  {
    id: 1,
    title: "Kênh của bạn",
    path: "/my-channel",
    icon: <MyChannelIcon />,
  },
  {
    id: 2,
    title: "Video đã xem",
    path: "/watched/me",
    icon: <WatchedIcon />,
    activeIcon: <ActiveWatchedIcon />,
  },
  {
    id: 3,
    title: "Danh sách phát",
    path: "/playlists",
    icon: <PlayListIcon />,
    activeIcon: <ActivePlayListIcon />,
  },
  {
    id: 4,
    title: "Video của bạn",
    path: "/my-videos",
    icon: <MyVideoIcon />,
  },
  {
    id: 5,
    title: "Xem sau",
    path: "/playlist/wl",
    icon: <LaterIcon />,
    activeIcon: <ActiveLaterIcon />,
  },
  {
    id: 6,
    title: "Video đã thích",
    path: "/playlist/lv",
    icon: <LikedIcon />,
    activeIcon: <ActiveLikedIcon />,
  },
  {
    id: 7,
    title: "Đoạn video của bạn",
    path: "/my-cut",
    icon: <CutIcon />,
    activeIcon: <ActiveCutIcon />,
  },
];

export const funcList3 = [
  {
    id: 1,
    title: "Thịnh hành",
    path: "/feed/popular",
    tag: "?tag=latest",
    icon: <PopularIcon />,
    activeIconn: <ActivePopularIcon />,
  },
  {
    id: 2,
    title: "Âm nhạc",
    path: "/ytb-channel/music",
    icon: <MusicIcon />,
    activeIcon: <ActiveMusicIcon />,
  },
  {
    id: 3,
    title: "Trò chơi",
    path: "/gaming",
    icon: <GameIcon />,
    activeIcon: <ActiveGameIcon />,
  },
  {
    id: 4,
    title: "Tin tức",
    path: "/news",
    tag: "?tag=top",
    icon: <NewsIcons />,
    activeIcon: <ActiveNewsIcon />,
  },
  {
    id: 5,
    title: "Thể thao",
    path: "/ytb-channel/sport",
    icon: <SportIcon />,
    activeIcon: <ActiveSportIcon />,
  },
];

export const funcList4 = [
  {
    id: 1,
    title: "YouTube Premium",
    path: "/ytb-premium",
    icon: <YoutubePremiumIcon />,
  },
  {
    id: 2,
    title: "YouTube Studio",
    path: "/ytb-studio",
    icon: <YoutubeStudioIcon />,
  },
  {
    id: 3,
    title: "YouTube Music",
    path: "/ytb-music",
    icon: <YoutubeMusicIcon />,
  },
  {
    id: 4,
    title: "YouTube Kids",
    path: "/ytb-kids",
    icon: <YoutubeKidIcon />,
  },
];

export const funcList5 = [
  {
    id: 1,
    title: "Cài đặt",
    path: "/account-setting/account",
    icon: <SettingIcon />,
    activeIcon: <ActiveSettingIcon />,
  },
  {
    id: 2,
    title: "Nhật ký báo cáo",
    path: "/report-history",
    icon: <DiaryIcon />,
    activeIcon: <ActiveDiaryIcon />,
  },
  {
    id: 3,
    title: "Trợ giúp",
    path: "/support",
    icon: <HelpIcon />,
  },
  {
    id: 4,
    title: "Gửi ý kiến phản hồi",
    path: "/feedback",
    icon: <FeedBackIcon />,
  },
];

export const Button = ({ data, path, style, textStyle, handleOnClick }) => {
  return (
    <li
      className={`px-[12px] rounded-[10px] cursor-pointer
        ${
          path && data.path && data?.path === path
            ? "bg-hover-black hover:bg-black-0.2"
            : "hover:bg-hover-black"
        }
        `}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (handleOnClick) {
          handleOnClick(data.path + (data?.tag ? data?.tag : ""));
        }
      }}
    >
      <div className={`flex ${style} items-center h-[40px] `}>
        <div className='mr-[24px]'>
          {path === data?.path ? data.activeIcon || data?.icon : data?.icon}
        </div>
        <span className={`${textStyle || "flex-1"}`}>{data?.title}</span>
        {data?.icon2}
      </div>
    </li>
  );
};

export const SmButton = ({ data, path, handleOnClick }) => {
  return (
    <li
      className={`flex flex-col justify-center items-center pt-[16px] py-[14px]
          rounded-[10px] cursor-pointer
              ${
                path && data.path && path === data?.path
                  ? "bg-hover-black hover:bg-black-0.2"
                  : "hover:bg-hover-black"
              }
        `}
      onClick={() => {
        if (handleOnClick) {
          handleOnClick(data.path);
        }
      }}
    >
      {path === data?.path ? data.activeIcon || data?.icon : data?.icon}
      <span className='text-[10px] leading-[14px] mt-[6px]'>{data.title}</span>
    </li>
  );
};

export const LinkComponent = ({ title }) => {
  return (
    <li className='mr-[6px]'>
      <Link>{title}</Link>
    </li>
  );
};
