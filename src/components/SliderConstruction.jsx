import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "src/styles/SliderContruction.module.css";
import image1 from "src/assets/arsitek/e-1.jpg";
import image2 from "src/assets/arsitek/e-1A.jpg";
import image3 from "src/assets/arsitek/e-2.jpg";
import image4 from "src/assets/arsitek/e-2A.jpg";
import image5 from "src/assets/arsitek/e-3.jpg";
import image6 from "src/assets/arsitek/e-3G.jpg";

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const images = [
    {
      src: image1,
      alt: "Image 1",
    },
    {
      src: image2,
      alt: "Image 2",
    },
    {
      src: image3,
      alt: "Image 3",
    },
    {
      src: image4,
      alt: "Image 4",
    },
    {
      src: image5,
      alt: "Image 5",
    },
    {
      src: image6,
      alt: "Image 6",
    },
  ];
  const nextSlide = () => {
    clearInterval(intervalId);
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  const previousSlide = () => {
    clearInterval(intervalId);
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);
    setIntervalId(id);
    return () => {
      clearInterval(id);
      setIntervalId(null);
    };
  }, [activeIndex]);
  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <Image
          key={index}
          className={
            index === activeIndex ? `${styles.active} ` : `${styles.inactive} `
          }
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
