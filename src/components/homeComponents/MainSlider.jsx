import mainSlider from "../../styles/HomeStyles/MainSlider.module.css";
import SliderItem from "./SldierItem";
import OwlCarousel from "react-owl-carousel";
export default function MainSlider() {
  const options = {
    items: 1,
    margin: 0,
    stagePadding: 0,
    smartSpeed: 450,
    loop: true,
    autoplay: true,
    lazyLoad: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div className={`${mainSlider["main-img-slider"]}`}>
        <OwlCarousel className="owl-theme" {...options}>
          <SliderItem
            className={`${mainSlider["item"]} ${mainSlider["item1"]} item`}
            prevTitle="Welcome to Craving Club"
            title="American Casual Dinning Restaurant"
            description="Craving Starts Over Here"
          />
          <SliderItem
            className={`${mainSlider["item"]} ${mainSlider["item2"]} item`}
            prevTitle="Welcome to Craving Club"
            title="Unique Dinning Experience"
            description="We take your dinning experience to the next level"
          />
          <SliderItem
            className={`${mainSlider["item"]} ${mainSlider["item3"]} item`}
            prevTitle="Welcome to Craving Club"
            title="Discover our customized offers"
            description="Whatever you need, you will find it here"
          />
        </OwlCarousel>
      </div>
    </>
  );
}
