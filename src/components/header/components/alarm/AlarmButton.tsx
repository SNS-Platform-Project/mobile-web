// components/header/AlarmButton.tsx
import { HeaderIcons } from "@/assets/icons";
import styles from "./AlarmButton.module.scss";

function AlarmButton() {
  return (
    <button className={styles.alarmButton}>
      <HeaderIcons.like size={24} />
      <span className={styles.badge}>3</span>
    </button>
  );
}

export default AlarmButton;
