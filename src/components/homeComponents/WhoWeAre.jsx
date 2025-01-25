import whoWeAre from "../../styles/HomeStyles/whoWeAre.module.css";
import OwlCarousel from "react-owl-carousel";
export default function WhoWeAre() {
  const WHO_WE_ARE_PATH = "../../assets/who-we-are/";
  const options = {
    loop: true,
    margin: 40,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    lazyLoad: true,
    slidetransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 2,
        margin: 20,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };
  return (
    <section className={whoWeAre["who-we-are"]}>
      <div className="container">
        <div className={whoWeAre["content"]}>
          <img src="../../assets/bull-01.png" alt="bull-Logo" />
          <span>Who We Are</span>
          <h2>
            A restaurant with Timeless & Traditional taste img We Only Serve
            Real Steaks, Authentic Tastes & Authentic Atmosphere, The steak you
            will always remember. Let us change your life with our steaks.
          </h2>
        </div>
      </div>
      <div
        className={`${whoWeAre["who-we-are-carousel"]} ${whoWeAre["left-gallery"]}`}
      >
        <OwlCarousel className="owl-carousel" {...options}>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img1.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img2.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img3.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img1.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img2.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img3.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img1.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img2.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img1.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={whoWeAre["img-container"]}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img3.jpg`}
              alt="who-we-are-img"
            />
          </div>
        </OwlCarousel>
      </div>
      <div
        className={`${whoWeAre["who-we-are-carousel"]} ${whoWeAre["right-gallery"]}`}
      >
        <OwlCarousel className="owl-carousel" {...options}>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img3.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img2.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img1.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img3.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img2.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img1.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img3.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img2.jpg`}
              alt="who-we-are-img"
            />
          </div>
          <div className={`${whoWeAre.reverse} ${whoWeAre["img-container"]}`}>
            <img
              src={`${WHO_WE_ARE_PATH}slider-img1.jpg`}
              alt="who-we-are-img"
            />
          </div>
        </OwlCarousel>
      </div>
      <a href="#">Read Our Story</a>
    </section>
  );
}
