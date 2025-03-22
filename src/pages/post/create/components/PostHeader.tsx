import { useNavigate } from "react-router-dom";
import styles from "./PostHeader.module.scss";

function PostHeader() {
  // 취소시 뒤로가기 위한 네비게이트
  const navigate = useNavigate();

  return (
    <div className={styles.postHeader}>
      <button
        onClick={() => navigate(-1)}
        className={styles.postHeader__button}
      >
        취소
      </button>
      <div className={styles.postHeader__title}>새로운 스택</div>
      <button
        className={styles.postHeader__button}
        onClick={() => {
          console.log("저장");
        }}
      >
        저장
      </button>
    </div>
  );
}

export default PostHeader;
