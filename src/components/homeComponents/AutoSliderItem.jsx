/* eslint-disable react/prop-types */
import autoSlider from "../../styles/HomeStyles/AutoSlider.module.css";
export default function AutoSliderItem({ title }) {
  return (
    <div className={`item ${autoSlider.item}`}>
      <div className={autoSlider["menu-select-content"]}>
        <span>{title}</span>
        <span className={autoSlider["mark_star"]}>*</span>
      </div>
    </div>
  );
}
