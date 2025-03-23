import { IconType } from "react-icons";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoAddOutline,
  IoPaperPlaneOutline,
  IoPersonOutline,
  IoLogoBuffer,
  IoHeartOutline,
  IoMenuOutline,
  IoClose,
  IoLinkOutline,
  IoImageOutline,
  IoHappyOutline,
  IoChevronBackOutline,
} from "react-icons/io5";

import { MdOutlineGif } from "react-icons/md";

// 네비바
export const NavIcons: Record<string, IconType> = {
  home: IoHomeOutline,
  search: IoSearchOutline,
  post: IoAddOutline,
  message: IoPaperPlaneOutline,
  profile: IoPersonOutline,
};

// 홈화면, 프로필화면 헤더
export const HeaderIcons = {
  logo: IoLogoBuffer,
  like: IoHeartOutline,
  menu: IoMenuOutline,
};

// 글쓰기 미디어
export const PostMediaIcons = {
  gif: MdOutlineGif,
  image: IoImageOutline,
  emoji: IoHappyOutline,
};

export const CommonIcon = {
  close: IoClose,
  link: IoLinkOutline,
  back: IoChevronBackOutline,
};
