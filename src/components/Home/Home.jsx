import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import data from "../../data/Home/Home.json";
export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <div className={styles.home}>
        <div className={styles.content}>
          <h1>{data[currentSlide].title}</h1>
          <p>{data[currentSlide].details}</p>
          <button className={styles.exploreButton}>EXPLORE NOW</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={data[currentSlide].smallImage}
            className={styles.chickenImage}
          />
        </div>
      </div>
    </section>
  );
};
