# Ex05 Image Carousel
## Date: 24/03/2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM

### App.jsx

```
import React from "react";
import Carousel from "./Carousel";

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Image Carousel</h2>
      <Carousel />
    </div>
  );
}

export default App;
```
### Main.jsx

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
### Carousel.jsx

```
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
```

## OUTPUT

![Website Screenshot](1.png)
![Website Screenshot](2.png)
![Website Screenshot](3.png)

## RESULT
The program for creating Image Carousel using React is executed successfully.
