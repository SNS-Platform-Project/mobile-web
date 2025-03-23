import styles from "./PostFooter.module.scss";

function PostFooter() {
  return (
    <div className={styles.postFooter}>
      <button className={styles.postFooter__submit}>게시</button>
    </div>
  );
}

export default PostFooter;
