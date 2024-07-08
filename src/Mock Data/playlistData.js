import {
  playlist2,
  playlist3,
  playlist4,
  playlist5,
  playlist6,
  playlist7,
  playlist8,
  playlist9,
  playlist10,
  playlist11,
  playlist12,
  tgb_pl1,
  tgb_pl2,
  tgb_pl3,
  tgb_pl4,
  tgb_pl5,
  tgb_pl6,
} from "../Assets/Images";

import { vidList3, vidList2 } from "./videoData";

// playlist lists
export const tgbPl = [
  {
    id: 1,
    title: "Restream NimoTV",
    thumb: tgb_pl1,
    vidQtt: 1,
    type: {
      title: "playlist",
      type: "single",
    },
  },
  {
    id: 2,
    title: "GOD OF WAR 5: RAGNAROK",
    thumb: tgb_pl2,
    vidQtt: 7,
    type: {
      title: "playlist",
      type: "single",
    },
  },
  {
    id: 3,
    title: "GOD OF WAR 4",
    thumb: tgb_pl3,
    vidQtt: 7,
    type: {
      title: "playlist",
      type: "single",
    },
  },
  {
    id: 4,
    title: "Aba Reaction",
    thumb: tgb_pl4,
    updatedDate: "06/22/2024, 8:05:30 AM",
    vidQtt: 123,
    type: {
      title: "playlist",
      type: "single",
    },
  },
  {
    id: 5,
    title: "KỶ NIỆM KHÔNG QUÊN BAROIBEO",
    thumb: tgb_pl5,
    vidQtt: 1,
    type: {
      title: "playlist",
      type: "single",
    },
  },
  {
    id: 6,
    title: "Daily Moment Thầy Giáo Ba Stream",
    thumb: tgb_pl6,
    updatedDate: "06/26/2024, 8:05:30 AM",
    vidQtt: 1638,
    type: {
      title: "playlist",
      type: "single",
    },
  },
];

export const randomPl1List = [
  {
    id: 1,
    title: "Video đã thích",
    thumb: playlist2,
    vidQtt: 138,
    type: {
      title: "playlist",
      type: "single",
      state: "Riêng tư",
    },
    updatedDate: "07/01/2024, 08:12:20 AM",
  },
  {
    id: 2,
    title: "xem sau",
    thumb: playlist3,
    vidQtt: 214,
    type: {
      title: "playlist",
      type: "single",
      state: "Riêng tư",
    },
    updatedDate: "06/25/2024, 08:12:20 AM",
  },
  {
    id: 3,
    title: "Css",
    thumb: playlist4,
    vidQtt: 33,
    type: {
      title: "playlist",
      type: "single",
      state: "Riêng tư",
    },
  },
  {
    id: 4,
    title: "3",
    thumb: playlist5,
    vidQtt: 46,
    type: {
      title: "playlist",
      type: "single",
      state: "Không công khai",
    },
  },
  {
    id: 5,
    title: "Master React JS by Building Real Projects",
    thumb: playlist6,
    vidQtt: 46,
    type: {
      title: "playlist",
      type: "single",
    },
    channel: {
      name: "JavsScript Mastery",
      subs: 785026,
    },
  },
  {
    id: 6,
    title: "1",
    thumb: playlist7,
    vidQtt: 30,
    type: {
      title: "playlist",
      type: "single",
      state: "Không công khai",
    },
  },
  {
    id: 7,
    title: "2",
    thumb: playlist8,
    vidQtt: 46,
    type: {
      title: "playlist",
      type: "single",
      state: "Không công khai",
    },
  },
  {
    id: 8,
    title: "Framer Motion (for React) Tutorial",
    thumb: playlist9,
    vidQtt: 18,
    type: {
      title: "playlist",
      type: "single",
    },
    channel: {
      name: "Net Ninja",
      subs: 125026,
    },
  },
  {
    id: 9,
    title: "Responsive Với Grid System (Giống Bootstrap 4)",
    thumb: playlist10,
    vidQtt: 35,
    type: {
      title: "playlist",
      type: "single",
    },
    channel: {
      name: "F8 Official",
      subs: 125026,
    },
  },
  {
    id: 10,
    title: "HTML, CSS từ Zero Tới Hero)",
    thumb: playlist11,
    vidQtt: 113,
    type: {
      title: "playlist",
      type: "single",
    },
    channel: {
      name: "F8 Official",
      subs: 125026,
    },
  },
  {
    id: 11,
    title: "Javascript Cơ Bản",
    thumb: playlist12,
    vidQtt: 116,
    type: {
      title: "playlist",
      type: "single",
    },
    channel: {
      name: "F8 Official",
      subs: 125026,
    },
  },
];

// playlist details
export const playListWL = {
  id: 1,
  name: "Xem sau",
  channel: {
    name: "thanh vo huy",
  },
  vidList: vidList3,
  view: 150,
  lastUpdated: "06/25/2024, 10:02:20 AM",
  linearBg:
    "linear-gradient(to bottom,rgba(101, 58, 93, 0.8) 0%,rgba(101, 58, 93, 0.298) 33%,rgba(15, 15, 15, 1) 100%)",
};

export const playlistLv = {
  id: 2,
  name: "Video đã thích",
  channel: {
    name: "thanh vo huy",
  },
  vidList: vidList2,
  view: 0,
  lastUpdated: "07/05/2024, 09:12:20 AM",
  linearBg:
    "linear-gradient(to bottom,rgba(20, 87, 89, 0.8) 0%,rgba(20, 87, 89, 0.298) 33%,rgba(15, 15, 15, 1) 100%)",
};
