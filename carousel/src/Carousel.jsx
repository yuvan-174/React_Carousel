import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1019/600/300"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  // Previous Image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <button onClick={prevImage} style={styles.button}>
        ◀
      </button>

      <img
        src={images[currentIndex]}
        alt="carousel"
        style={styles.image}
      />

      <button onClick={nextImage} style={styles.button}>
        ▶
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "50px"
  },
  image: {
    width: "600px",
    height: "300px",
    borderRadius: "10px"
  },
  button: {
    padding: "10px",
    fontSize: "20px",
    cursor: "pointer"
  }
};

export default Carousel;