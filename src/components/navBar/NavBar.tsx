import { useNavigationStore } from "@/store/navigationStore";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./NavBar.module.scss";

//아이콘
import { IconType } from "react-icons";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoAddOutline,
  IoPaperPlaneOutline,
  IoPersonOutline,
} from "react-icons/io5";

// 아이콘 매핑 객체
const iconMap: Record<string, IconType> = {
  home: IoHomeOutline,
  search: IoSearchOutline,
  write: IoAddOutline, // 글쓰기 아이콘
  message: IoPaperPlaneOutline,
  profile: IoPersonOutline,
};

function NavBar() {
  const { navigation, fetchNavigation } = useNavigationStore();
  const loaction = useLocation();

  useEffect(() => {
    fetchNavigation();
  }, []);

  return (
    <nav className={styles.navbar}>
      {navigation.map((navItem) => {
        const IconComponent = iconMap[navItem.label]; // 아이콘 동적 매핑
        const isActive = loaction.pathname === navItem.path;
        return (
          <Link
            key={navItem.id}
            to={navItem.path}
            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
          >
            {IconComponent && <IconComponent />}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
