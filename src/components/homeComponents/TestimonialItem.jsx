/* eslint-disable react/prop-types */
import testimonials from "../../styles/HomeStyles/testimonials.module.css";
export default function TetimonialItem({
  imgPath,
  reviewDes,
  reviewOwner,
  reviewSrc,
}) {
  const TESTIMONIAL_PATH = "../../assets/slider-imgs/";
  return (
    <div>
      <div className={testimonials["testimonial"]}>
        <div className={testimonials["img"]}>
          <img src={`${TESTIMONIAL_PATH}${imgPath}`} alt="testimonial-img" />
        </div>
        <div className={testimonials["text"]}>
          <span className={testimonials["start-quote"]}>“</span>
          <div className={testimonials["star"]}>
            <img src="../../assets/icons/star.png" alt="star-icon" />
            <img src="../../assets/icons/star.png" alt="star-icon" />
            <img src="../../assets/icons/star.png" alt="star-icon" />
            <img src="../../assets/icons/star.png" alt="star-icon" />
            <img src="../../assets/icons/star.png" alt="star-icon" />
          </div>
          <p>
            {reviewDes}
            {/* Amazing ambience, great food, very courteous staff. Overall very
            good experience. Best place to have real steak food. */}
          </p>
          <div className={testimonials["name"]}>
            <h3>
              {reviewOwner}, <span>{reviewSrc}</span>
              {/* Raed Mokhtar, <span>Google Reviews</span> */}
            </h3>
          </div>
          <span className={testimonials["end-quote"]}>”</span>
        </div>
      </div>
    </div>
  );
}
