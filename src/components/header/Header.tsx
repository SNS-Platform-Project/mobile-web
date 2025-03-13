import styles from "./Header.module.scss";

import { IoLogoBuffer, IoHeartOutline, IoMenuOutline } from "react-icons/io5";

interface HeaderProps {
  type: "home" | "profile" | "login"; // 홈, 프로필 구분
}

function Header({ type }: HeaderProps) {
  return (
    <header className={styles.header}>
      {/* 중앙 앱 아이콘 */}
      <div className={styles.appIcon}>
        <IoLogoBuffer size={30} />
      </div>

      {/* 오른쪽 아이콘 */}
      <button className={styles.rightIcon}>
        {type === "home" && <IoHeartOutline size={24} />}{" "}
        {/* 알람 개수 배지 (홈 화면일 때만 표시) */}
        {type === "home" && <span className={styles.badge}>3</span>}
        {type === "profile" && <IoMenuOutline size={24} />}
      </button>
    </header>
  );
}

export default Header;
