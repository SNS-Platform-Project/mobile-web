import styles from "./PostFooter.module.scss";

function PostFooter() {
  // TODO: 모바일 키보드 해야한다.
  return (
    <div className={styles.postFooter}>
      <button className={styles.postFooter__submit}>게시</button>
    </div>
  );
}

export default PostFooter;
