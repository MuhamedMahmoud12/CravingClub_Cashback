import aboutUs from "../../styles/HomeStyles/aboutUs.module.css";
const VIDEO_PATH = "../../assets/video-imgs/";
const ICONS_PATH = "../../assets/icons/";
const COUNTTO_PATH = "../../assets/countToImgs/";
export default function AboutUs() {
  return (
    <div className="container">
      <div className={aboutUs["about-heading"]}>
        <span className={`prev-title`}>About Craving</span>
        <h2 className={aboutUs["title"]}>
          <span className={aboutUs["first-title-span"]}>Craving </span>
          <span className={aboutUs["second-title-span"]}>Starts </span>
          <span className={aboutUs["third-title-span"]}>Over</span>
          <span className={aboutUs["fourth-title-span"]}>Here</span>
        </h2>
      </div>
      <div className={aboutUs["about-video"]}>
        <div className={aboutUs["overlay"]}>
          <div className={aboutUs["play-btn"]}>
            <a href="#">
              <img src={`${VIDEO_PATH}play.png`} alt="play-video" />
            </a>
          </div>
          <div className={aboutUs["spin-text"]}>
            <img src={`${VIDEO_PATH}video_text.png`} alt="vide-text" />
          </div>
          <div className={aboutUs["video-content"]}>
            <div>
              <div className={aboutUs["icon"]}>
                <img
                  src={`${ICONS_PATH}maps-and-flags.png`}
                  alt="locaion-icon"
                />
              </div>
              <div className={aboutUs["text"]}>
                <h5>Locations</h5>
                <p>Abha - Khamis Mushait</p>
                <p>Jazan - Corniche Road</p>
              </div>
            </div>
            <div>
              <div className={aboutUs["icon"]}>
                <img src={`${ICONS_PATH}clock.png`} alt="open-hours-icon" />
              </div>
              <div className={aboutUs["text"]}>
                <h5>Open Hours</h5>
                <p>Sat-Wed: 11AM-1AM</p>
                <p>Thur-Fri: 1PM- 4AM</p>
              </div>
            </div>
            <div>
              <div className={aboutUs["icon"]}>
                <img src={`${ICONS_PATH}calendar.png`} alt="locaion-icon" />
              </div>
              <div className={aboutUs["text"]}>
                <h5>Reservation</h5>
                <p>+966 54 798 4094</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={aboutUs["about-rate"]}>
        <div className={aboutUs["first-div"]}>
          <img src={`${COUNTTO_PATH}happy.png`} alt="Happy-customers" />
          <div className={aboutUs["count-to"]}>
            <span className={aboutUs["count-to"]} id="happy-customers">
              0
            </span>
            <span className={aboutUs.plus}>+</span>
          </div>
          <span className={aboutUs.text}>Happy Monthly Customers</span>
        </div>
        <div>
          <img src={`${COUNTTO_PATH}like.png`} alt="google-reviews" />
          <div className={aboutUs["count-to"]}>
            <span className={aboutUs["count-to"]} id="google-reviews">
              0
            </span>
            <span className={aboutUs.plus}>+</span>
          </div>
          <span className={aboutUs.text}>Great Google Reviews</span>
        </div>
        <div>
          <img src={`${COUNTTO_PATH}branch.png`} alt="branches" />
          <div className={aboutUs["count-to"]}>
            <span className={aboutUs["count-to"]} id="branches">
              0
            </span>
            <span className={aboutUs.plus}>+</span>
          </div>
          <span className={aboutUs.text}>Branches</span>
        </div>
      </div>
    </div>
  );
}
