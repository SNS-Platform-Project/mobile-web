import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuthStore from "@/store/user/authStore";

import { logoutAPI } from "@/api/auth";

import styles from "./ProfileMenuButton.module.scss";
import { HeaderIcons } from "@/assets/icons";

function ProfileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { clearUser } = useAuthStore();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAPI();
      clearUser();
      alert("로그아웃 되었습니다!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("로그아웃 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className={styles.menuWrapper}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <HeaderIcons.menu size={24} />
      </button>
      {isOpen && (
        <ul className={styles.dropdown}>
          <li>내 프로필</li>
          <li>설정</li>
          <li className={styles.divider}></li>
          <li className={styles.logout} onClick={handleLogout}>
            로그아웃
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileMenuButton;
