import { useState } from "react";

import styles from "./TabNavBar.module.scss";

interface TabNavBarProps {
  tabs: string[];
  onTabChange?: (tab: string) => void;
  top?: number;
}

function TabNavBar({ tabs, onTabChange, top }: TabNavBarProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]); // 첫 번째 탭 기본 선택

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <nav className={styles.navBar} style={{ top: `${top}px` }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tabItem} ${
            activeTab === tab ? styles.active : ""
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default TabNavBar;
