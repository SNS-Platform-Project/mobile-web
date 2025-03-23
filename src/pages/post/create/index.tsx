import PostFooter from "./components/footer/PostFooter";
import PostHeader from "./components/header/PostHeader";
import PostMediaUpload from "./components/mediaUpload/PostMediaUpload";
import PostTextarea from "./components/textarea/PostTextarea";

import styles from "./index.module.scss";

function index() {
  return (
    <div className={styles.postCreate}>
      <PostHeader />
      <PostTextarea />
      <PostMediaUpload />
      <PostFooter />
    </div>
  );
}

export default index;
