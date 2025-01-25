import offers from "../../styles/HomeStyles/offers.module.css";
import OwlCarousel from "react-owl-carousel";
export default function Offers() {
  const OFFERS_PATH = "../../assets/offers-imgs/";
  const options = {
    items: 1,
    margin: 40,
    stagePadding: 30,
    smartSpeed: 450,
    loop: true,
    autoplay: true,
    lazyLoad: true,
  };
  return (
    <div className="container">
      <span className="prev-title">Our Offers</span>
      <h2>Explore Our Exclusive Offers</h2>
      <OwlCarousel className="owl-carousel" {...options}>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>Kids Meal</h5>
                <h6>Free Meal For your Kid on Wednesday</h6>
                <p>
                  Let your kid enjoy his free meal on wednesday from our
                  kidsmeal menu
                </p>
                <a href="#">Explore More</a>
              </div>
            </div>
            <div className={offers["img"]}>
              <img src={`${OFFERS_PATH}kids-meal.jpg`} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>Kids Meal</h5>
                <h6>Free Meal For your Kid on Wednesday</h6>
                <p>
                  Let your kid enjoy his free meal on wednesday from our
                  kidsmeal menu
                </p>
                <a href="#">Explore More</a>
              </div>
            </div>
            <div className={offers["img"]}>
              <img src={`${OFFERS_PATH}kids-meal_30.jpg`} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className={offers["offer-grid"]}>
            <div className={offers["text"]}>
              <div>
                <h5>Kids Meal</h5>
                <h6>Free Meal For your Kid on Wednesday</h6>
                <p>
                  Let your kid enjoy his free meal on wednesday from our
                  kidsmeal menu
                </p>
                <a href="#">Explore More</a>
              </div>
            </div>
            <div className={offers["img"]}>
              <img src={`${OFFERS_PATH}kids-meal.jpg`} alt="" />
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
