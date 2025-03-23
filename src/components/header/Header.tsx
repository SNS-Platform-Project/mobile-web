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
      <button className={styles.rightIcon}>
        {type === "home" && <HeaderIcons.like size={24} />}{" "}
        {/* 알람 개수 배지 (홈 화면일 때만 표시) */}
        {type === "home" && <span className={styles.badge}>3</span>}
        {type === "profile" && <HeaderIcons.menu size={24} />}
      </button>
    </header>
  );
}

export default Header;
