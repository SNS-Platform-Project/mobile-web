import { ReactNode } from "react";
import { useLocation, matchPath } from "react-router-dom";
import NavBar from "../navBar/NavBar";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // 네비게이션이 표시될 경로 목록
  const showNavbarPaths = ["/", "/search", "/profile", "/post/:id"];
  const showNavbar = showNavbarPaths.some((path) =>
    matchPath(path, location.pathname)
  );

  return (
    <div className={styles.container}>
      <main className={styles.content}>{children}</main>
      {showNavbar && <NavBar />}
    </div>
  );
}

export default Layout;
