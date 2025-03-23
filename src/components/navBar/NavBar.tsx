import { useNavigationStore } from "@/store/navigationStore";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./NavBar.module.scss";

import { NavIcons } from "@/assets/icons";

function NavBar() {
  const { navigation, fetchNavigation } = useNavigationStore();
  const loaction = useLocation();

  useEffect(() => {
    fetchNavigation();
  }, []);

  return (
    <nav className={styles.navbar}>
      {navigation.map((navItem) => {
        const IconComponent = NavIcons[navItem.label]; // 아이콘 동적 매핑

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
