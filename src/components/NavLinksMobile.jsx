import styles from "../styles/Header.module.css";
import NAV_LINKS from "../data/link-routes";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
export default function NavLinksMobile() {
  const [isVisible, setIsVisible] = useState(false);
  const { token } = useAuth();
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
                <NavLink href={element.href}>{element.content}</NavLink>
              </li>
            );
          })}
          <li className={styles["nav-reservation-li"]}>
            <NavLink className={styles["nav-reservation-link"]}>
              <span className={styles["nav-reservation-span"]}>
                Reservation:
              </span>
              +966 54 798 4094
            </NavLink>
          </li>
          <li className={styles["nav-primeclub-li"]}>
            {!token ? (
              <NavLink
                className={`${styles["nav-primeclub-link"]} ${styles["no-hover"]}`}
                id="prime-club-btn"
                to="/sign-up"
              >
                Prime Club
              </NavLink>
            ) : (
              <NavLink
                className={`${styles["nav-primeclub-link"]} ${styles["no-hover"]}`}
                id="prime-club-btn"
                to="/profile"
              >
                Profile
              </NavLink>
            )}
          </li>
          <li className={styles["nav-lang-li"]}>
            <NavLink href="#" className={styles["nav-lang-link"]}>
              Change Language : &nbsp;
              <img src="/assets/icons/ar.png" alt="arabic-language-img" />
              ARABIC
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
