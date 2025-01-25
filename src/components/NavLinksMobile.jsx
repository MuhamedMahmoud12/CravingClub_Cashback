import styles from "../styles/Header.module.css";
import NAV_LINKS from "../data/link-routes";
import { useState } from "react";
export default function NavLinksMobile() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={styles["mobile-nav"]}>
      <div
        onClick={() => {
          setIsVisible((isVisible) => !isVisible);
        }}
        className={styles["mobile-nav-btn"]}
        id="mobile-nav-btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${styles["mobile-nav-links"]} ${
          isVisible ? styles.visible : ""
        }`}
        id="mobile-nav-links"
      >
        <ul className={styles["mobile-nav-links-ul"]}>
          {NAV_LINKS.map((element, index) => {
            return (
              <li key={index}>
                <a href={element.href}>{element.content}</a>
              </li>
            );
          })}
          <li className={styles["nav-reservation-li"]}>
            <a href="#" className={styles["nav-reservation-link"]}>
              <span className={styles["nav-reservation-span"]}>
                Reservation:
              </span>
              +966 54 798 4094
            </a>
          </li>
          <li className={styles["nav-primeclub-li"]}>
            <a href="sign-up" className={styles["nav-primeclub-link"]}>
              Prime Club
            </a>
          </li>
          <li className={styles["nav-lang-li"]}>
            <a href="#" className={styles["nav-lang-link"]}>
              Change Language : &nbsp;
              <img src="/assets/icons/ar.png" alt="arabic-language-img" />
              ARABIC
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
