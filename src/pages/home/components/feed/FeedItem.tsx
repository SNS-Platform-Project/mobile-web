import { FeedPost } from "@/types/feed";
import FeedImageGrid from "./FeedImageGrid";
import styles from "./FeedItem.module.scss";

import { PostIcons } from "@/assets/icons/index";

function FeedItem({ post }: { post: FeedPost }) {
  const { user, post: content } = post;

  const formatContent = (text: string) => {
    return text.split(" ").map((word, i) => {
      if (word.startsWith("@")) {
        return (
          <span key={i} className={styles.mention}>
            {word}{" "}
          </span>
        );
      }
      if (word.startsWith("#")) {
        return (
          <span key={i} className={styles.hashtag}>
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  const stats = [
    { type: "like", count: content.stat.likesCount },
    { type: "comment", count: content.stat.commentsCount },
    { type: "share", count: content.stat.sharedCount },
    { type: "repost", count: content.stat.repostCount },
  ] as const;

  return (
    <div className={styles.feedCard}>
      <div className={styles.profileRow}>
        <img
          src={user.profilePictureUrl || "/default-profile.png"}
          alt="profile"
          className={styles.profileImg}
        />
        <div>
          <div className={styles.username}>{user.username}</div>
          <div className={styles.time}>
            {new Date(content.createdAt).toLocaleString()}
          </div>
        </div>
      </div>

      <div className={styles.content}>{formatContent(content.content)}</div>

      {content.images && content.images.length > 0 && (
        <FeedImageGrid images={content.images} />
      )}

      <div className={styles.stats}>
        {stats.map(({ type, count }) => {
          const Icon = PostIcons[type];
          return (
            <button
              key={type}
              className={styles.iconButton}
              onClick={() => console.log(`${type} 클릭!`)}
            >
              <Icon size={18} />
              <span>{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FeedItem;
