import PostHeader from "./components/PostHeader";

import styles from "./index.module.scss";

function index() {
  return (
    <div className={styles.postCreate}>
      <PostHeader />
    </div>
  );
}

export default index;
