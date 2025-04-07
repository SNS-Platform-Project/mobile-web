import FeedItem from "./FeedItem";

import { FeedPost } from "@/types/feed";

function FeedList({ feeds }: { feeds: FeedPost[] }) {
  if (feeds.length === 0) return <p>피드가 없습니다 😢</p>;

  return (
    <div>
      {feeds.map((feed) => (
        <FeedItem key={feed.post.id} post={feed} />
      ))}
    </div>
  );
}

export default FeedList;
