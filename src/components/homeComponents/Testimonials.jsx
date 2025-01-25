import testimonials from "../../styles/HomeStyles/testimonials.module.css";
import TestimonialItem from "./TestimonialItem";
import OwlCarousel from "react-owl-carousel";
export default function Testimonials() {
  const options = {
    loop: true,
    items: 1,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 5000,
  };
  return (
    <section className={testimonials["testimonials"]}>
      <div className="container">
        <span className="prev-title">Tasty Words</span>
        <h2>What they Say?</h2>
        <div className={testimonials["testimonials-container"]}>
          <OwlCarousel className="owl-carousel" {...options}>
            <TestimonialItem
              imgPath="slider-img1.jpg"
              reviewDes="Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food."
              reviewOwner="Raed Mokhtar"
              reviewSrc="Google Reviews"
            />
            <TestimonialItem
              imgPath="slider-img1.jpg"
              reviewDes="Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food."
              reviewOwner="Raed Mokhtar"
              reviewSrc="Google Reviews"
            />
            <TestimonialItem
              imgPath="slider-img1.jpg"
              reviewDes="Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food."
              reviewOwner="Raed Mokhtar"
              reviewSrc="Google Reviews"
            />
            <TestimonialItem
              imgPath="slider-img1.jpg"
              reviewDes="Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food."
              reviewOwner="Raed Mokhtar"
              reviewSrc="Google Reviews"
            />
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}
