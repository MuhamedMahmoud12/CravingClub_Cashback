/* eslint-disable react/prop-types */
import autoSlider from "../../styles/HomeStyles/AutoSlider.module.css";
import AutoSliderItem from "./AutoSliderItem";
import OwlCarousel from "react-owl-carousel";
export default function AutoSlider({ properties, titles }) {
  return (
    <div className={autoSlider["menu-select"]}>
      <OwlCarousel className="owl-carousel" {...properties}>
        <AutoSliderItem title={titles[0]} />
        <AutoSliderItem title={titles[1]} />
        <AutoSliderItem title={titles[2]} />
        <AutoSliderItem title={titles[3]} />
        <AutoSliderItem title={titles[4]} />
        <AutoSliderItem title={titles[5]} />
        <AutoSliderItem title={titles[6]} />
        <AutoSliderItem title={titles[7]} />
        <AutoSliderItem title={titles[8]} />
        <AutoSliderItem title={titles[9]} />
        <AutoSliderItem title={titles[10]} />
        <AutoSliderItem title={titles[11]} />
        <AutoSliderItem title={titles[12]} />
        <AutoSliderItem title={titles[13]} />
      </OwlCarousel>
    </div>
  );
}
