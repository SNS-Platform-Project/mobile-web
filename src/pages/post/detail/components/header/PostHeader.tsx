import { useNavigate } from "react-router-dom";
import styles from "./PostHeader.module.scss";

import { CommonIcon } from "@/assets/icons";

function PostHeader() {
  // 취소시 뒤로가기 위한 네비게이트
  const navigate = useNavigate();

  return (
    <div className={styles.postHeader}>
      <button
        onClick={() => navigate(-1)}
        className={styles.postHeader__button}
        aria-label="뒤로"
      >
        <CommonIcon.back size={24} />
      </button>
      <div className={styles.postHeader__title}>스택</div>
      <button
        className={styles.postHeader__button}
        onClick={() => {
          console.log("저장");
        }}
        aria-label="더보기"
      >
        <CommonIcon.more size={24} />
      </button>
    </div>
  );
}

export default PostHeader;
