import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./PostMedia.module.scss";

interface PostMediaProps {
  images: string[];
}

function PostMedia({ images }: PostMediaProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.postMedia}>
      <Swiper
        spaceBetween={12}
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{ clickable: true }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`post-img-${idx}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PostMedia;
