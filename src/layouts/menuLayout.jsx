import { Outlet } from "react-router-dom";
import MainSlider from "../components/homeComponents/MainSlider";
import AutoSlider from "../components/homeComponents/AutoSlider";
import MenuItemsNav from "../components/menuComponents/MenuItemsNav";
import SLIDER_OPTIONS from "../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../data/autoSliderTitles";
import home from "../styles/HomeStyles/home.module.css";
export default function MenuLayout() {
  return (
    <div className="layout">
      <section className={home["slider-section"]}>
        <MainSlider />
        <AutoSlider
          properties={SLIDER_OPTIONS[0].menuAutoSlider}
          titles={AUTO_SLIDER_TITLES.menuVatTitles}
        />
      </section>
      <MenuItemsNav />

      <Outlet />
    </div>
  );
}
