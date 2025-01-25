import footer from "../styles/footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={footer["location"]}>
          <div>
            <p>
              <span className={footer["branch"]}>First Branch: </span>King Fahd
              Rd, Khamis Mushait 62432, Saudi Arabia. <br />
              <span className={footer["branch"]}>Second Branch: </span>2103
              Corniche Rd, 7730, Jazan 82725, Saudi Arabia.
            </p>
            <a href="#">Get Direction</a>
          </div>
          <div>
            <span className={footer["times"]}>
              Saturday - Wednesday: 11:00 AM - 1:00 AM
            </span>
            <span className={footer["times"]}>
              Thursday &amp; Friday: 1:00 PM - 4:00 AM
            </span>
            <a href="#" className={footer["reservation"]}>
              Reservation
            </a>
          </div>
        </div>
        <div className={footer["prime-links"]}>
          <div className={footer["prime-club-section"]}>
            <h2>Prime Club &amp; Offers</h2>
            <p>Sign Up and get up to 20% discount</p>
            <a href="#">Prime Club</a>
          </div>
          <div className={footer["social-links-section"]}>
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
                <a href="#">Tiktok</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={footer["footer-nav-links"]}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={footer["copyrights"]}>
        <p>© 2024 Restaurant. All Rights Reserved | Crafted by Craving Club</p>
      </div>
    </footer>
  );
}
