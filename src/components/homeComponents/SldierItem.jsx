/* eslint-disable react/prop-types */
import styles from "../../styles/HomeStyles/MainSlider.module.css";
export default function SliderItem({
  prevTitle,
  title,
  description,
  ...props
}) {
  return (
    <div {...props}>
      <div className={styles.overlay}>
        <div className={styles["slider-content"]}>
          <span className={styles["prev-title-span"]}>{prevTitle}</span>
          <h2 className={styles["slider-title"]}>{title}</h2>
          <p className={styles["slider-paragraph"]}>{description}</p>
          <a href="#" className={styles["slider-btn"]}>
            View Our Full Menu
          </a>
        </div>
      </div>
    </div>
  );
}
