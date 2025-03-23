import { usePostStore } from "@/store/post/postStore";

function PostPreview() {
  const content = usePostStore((state) => state.content);
  const hashtags = usePostStore((state) => state.hashtags);
  const mentions = usePostStore((state) => state.mentions);
  const images = usePostStore((state) => state.images);

  return (
    <div>
      <h3>📝 미리보기</h3>
      <hr />
      <p>content : {content}</p>
      <p>hastags: {hashtags.join(", ")}</p>
      <p>metions : {mentions.join(", ")}</p>
      <p>images : {images.join(", ")}</p>
    </div>
  );
}

export default PostPreview;
