import { useNavigationStore } from "@/store/navigationStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

function NavBar() {
  const { navigation, fetchNavigation } = useNavigationStore();

  useEffect(() => {
    fetchNavigation();
  }, []);

  return (
    <nav className={styles.navbar}>
      {navigation.map((navItem) => (
        <Link key={navItem.id} to={navItem.path}>
          {navItem.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
