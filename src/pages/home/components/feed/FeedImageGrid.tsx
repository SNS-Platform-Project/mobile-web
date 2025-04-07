import styles from "./FeedItem.module.scss";

function FeedImageGrid({ images }: { images: string[] }) {
  return (
    <div className={styles.imageGrid}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`image-${i}`}
          style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
        />
      ))}
    </div>
  );
}

export default FeedImageGrid;
