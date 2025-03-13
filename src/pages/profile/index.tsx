import Header from "@/components/header/Header";

import styles from "./profile.module.scss";

function index() {
  return (
    <div className={styles.profileContainer}>
      <Header type="profile" />

      {/* 프로필 상단 영역 */}
      <div className={styles.profileHeader}>
        {/* 프로필 이미지 */}
        <img
          src="src/assets/images/HJY.jpg"
          alt="프로필 이미지"
          className={styles.profileImage}
        />

        {/* 유저 정보 및 팔로잉/팔로워 수 */}
        <div className={styles.profileInfo}>
          <p className={styles.username}>한주영</p>
          <div className={styles.followContainer}>
            <span>
              <b>350</b> 팔로워
            </span>
            <span>
              <b>150</b> 팔로잉
            </span>
          </div>
        </div>
      </div>

      {/* 소개글 */}
      <p className={styles.bio}>안녕하세요</p>

      <div>
        <button className={styles.editButton}>프로필 편집</button>
        <button className={styles.editButton}>프로필 공유</button>
      </div>
    </div>
  );
}

export default index;
