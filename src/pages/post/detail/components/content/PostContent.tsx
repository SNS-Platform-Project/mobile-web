import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import PostMedia from "./media/PostMedia";

import styles from "./PostContent.module.scss";

dayjs.extend(relativeTime);
dayjs.locale("ko");

const mockPost = {
  id: 1,
  type: "post",
  user: {
    userId: "abc124",
    username: "한주영",
    profileImageUrl:
      "https://ui-avatars.com/api/?name=한주영&background=random&rounded=true​",
  },
  createdAt: "2025-03-22T02:56:04.470+00:00",
  content: "안녕하세요 @han #프론트엔드 #리액트 개발자입니다!",
  hashtags: ["프론트엔드", "리액트"],
  mentions: ["han"],
  images: [
    "https://ui-avatars.com/api/?name=한&background=random&rounded=true",
    "https://ui-avatars.com/api/?name=주&background=random&rounded=true",
    "https://ui-avatars.com/api/?name=영&background=random&rounded=true",
  ],
};

function PostContent() {
  const { user, createdAt, content } = mockPost;
  const formattedTime = dayjs(createdAt).fromNow(); // "2일 전" 등

  const parsedContent = content.split(/(\s+)/).map((part, index) => {
    if (/^@[\wㄱ-ㅎㅏ-ㅣ가-힣]+$/.test(part)) {
      return (
        <span key={index} className={styles.mention}>
          {part}
        </span>
      );
    } else if (/^#[\wㄱ-ㅎㅏ-ㅣ가-힣]+$/.test(part)) {
      return (
        <span key={index} className={styles.hashtag}>
          {part}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });

  return (
    <div className={styles.postContent}>
      <div className={styles.meta}>
        <img
          className={styles.profileImage}
          src={user.profileImageUrl}
          alt={`${user.username}의 프로필`}
        />
        <div className={styles.userInfo}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.time}> {formattedTime}</span>
        </div>
      </div>
      <div className={styles.text}>{parsedContent}</div>

      <PostMedia images={mockPost.images} />
    </div>
  );
}

export default PostContent;
