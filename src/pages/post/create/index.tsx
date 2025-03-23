import PostHeader from "./components/PostHeader";
import PostTextarea from "./components/PostTextarea";

import styles from "./index.module.scss";

function index() {
  return (
    <div className={styles.postCreate}>
      <PostHeader />
      <PostTextarea />
    </div>
  );
}

export default index;
