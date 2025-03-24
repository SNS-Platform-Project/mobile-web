import AlarmButton from "./components/alarm/AlarmButton";
import ProfileMenuButton from "./components/menu/ProfileMenuButton";

import styles from "./Header.module.scss";

import { HeaderIcons } from "@/assets/icons";

interface HeaderProps {
  type: "home" | "profile" | "login"; // 홈, 프로필 구분
}

function Header({ type }: HeaderProps) {
  return (
    <header className={styles.header}>
      {/* 중앙 앱 아이콘 */}
      <div className={styles.appIcon}>
        <HeaderIcons.logo size={30} />
      </div>

      {/* 오른쪽 아이콘 */}

      <div className={styles.rightWrapper}>
        {type === "home" && <AlarmButton />}
        {type === "profile" && <ProfileMenuButton />}
      </div>
    </header>
  );
}

export default Header;
