import Header from "@/components/header/Header";

import styles from "./profile.module.scss";
import { IoLinkOutline } from "react-icons/io5";

function index() {
  return (
    <div>
    <Header type="profile" />
    <div className={styles.profileContainer}>
      {/* 프로필 상단 (이미지 + 유저 정보 + 버튼) */}
      <div className={styles.profileHeader}>
        {/* 프로필 이미지 */}
        <img
          src="src/assets/images/HJY.jpg"
          alt="프로필 이미지"
          className={styles.profileImage}
        />
        {/* 유저 정보 및 팔로잉/팔로워 수 */}
        <div className={styles.profileInfo}>
          <p className={styles.profileInfo__username}>한주영</p>
          <div className={styles.followContainer}>
            <span>
              <b className={styles.followContainer__follower}>350</b> 팔로워
            </span>
            <span>
              <b className={styles.followContainer__following}>150</b> 팔로잉
            </span>
          </div>
        </div>
      </div>

      {/* 프로필 소개글 및 링크 */}
      <div className={styles.profileDetails}>
        <p className={styles.profileDetails__bio}>안녕하세요</p>
        <div className={styles.profileDetails__link}>
          <IoLinkOutline className={styles.linkIcon} />
          <a
            href="https://youtu.be/_51U548cEQg?si=8Y2R-BvQb9oZfie0"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://youtu.be/_51U548cEQg?si=8Y2R-BvQb9oZfie0
          </a>
        </div>
      </div>

      {/* 프로필 수정 및 공유 버튼 */}
      <div className={styles.profileEdit}>
        <button className={styles.profileEdit__editButton}>프로필 편집</button>
        <button className={styles.profileEdit__editButton}>프로필 공유</button>
      </div>
    </div>
    </div>
  );
}

export default index;
