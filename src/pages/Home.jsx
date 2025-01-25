import MainSlider from "../components/homeComponents/MainSlider";
import AutoSlider from "../components/homeComponents/AutoSlider";
import AboutUs from "../components/homeComponents/AboutUs";
import MenuCategories from "../components/homeComponents/MenuCategories";
import Offers from "../components/homeComponents/Offers";
import WhoWeAre from "../components/homeComponents/WhoWeAre";
import Testimonials from "../components/homeComponents/Testimonials";
import PrimeClub from "../components/homeComponents/SignUp";
import home from "../styles/HomeStyles/Home.module.css";
import aboutUs from "../styles/HomeStyles/aboutUs.module.css";
import menuCategories from "../styles/HomeStyles/menuCategories.module.css";
import offers from "../styles/HomeStyles/offers.module.css";

// Auto Slider Options
import SLIDER_OPTIONS from "../data/sliderOptions";
import AUTO_SLIDER_TITLES from "../data/autoSliderTitles";
export default function Home() {
  return (
    <>
      <section className={home["slider-section"]}>
        <div className={home["left-side-div"]}>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Snapchat</a>
            </li>
            <li>
              <a href="#" className={home["last-link"]}>
                Tiktok
              </a>
            </li>
          </ul>
        </div>
        <div className={home["right-side-div"]}>
          <ul>
            <li>Sat - Wed: 11AM - 1AM</li>
            <li>Thur - Fri: 1PM - 4AM</li>
          </ul>
        </div>
        <MainSlider />
        <AutoSlider
          properties={SLIDER_OPTIONS[0].homeAutoSlider}
          titles={AUTO_SLIDER_TITLES.homeTitles}
        />
      </section>
      <section className={aboutUs["about-us"]}>
        <AboutUs />
      </section>
      <section className={menuCategories["categories"]}>
        <MenuCategories />
      </section>
      <section className={offers["offers-section"]}>
        <Offers />
      </section>
      <WhoWeAre />
      <Testimonials />
      <PrimeClub />
    </>
  );
}
