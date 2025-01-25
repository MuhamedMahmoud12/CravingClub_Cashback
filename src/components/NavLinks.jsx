import styles from "../styles/Header.module.css";
import NAV_LINKS from "../data/link-routes";
export default function NavLinks() {
  return (
    <div className={styles["nav-links"]}>
      <ul className={styles["nav-links-ul"]}>
        {NAV_LINKS.map((element, index) => {
          return (
            <li key={index}>
              <a href={element.href}>{element.content}</a>
            </li>
          );
        })}
        <li className={styles["nav-reservation-li"]}>
          <a
            href="#"
            className={`${styles["nav-reservation-link"]} ${styles["no-hover"]}`}
          >
            <span className={styles["nav-reservation-span"]}>Reservation:</span>
            +966 54 798 4094
          </a>
        </li>
        <li className={styles["nav-primeclub-li"]}>
          <a
            href="sign-up"
            className={`${styles["nav-primeclub-link"]} ${styles["no-hover"]}`}
            id="prime-club-btn"
          >
            Prime Club
          </a>
        </li>
        <li className="nav-lang-li">
          <a
            href="#"
            className={`${styles["nav-lang-link"]} ${styles["no-hover"]}`}
          >
            <img src="../assets/icons/ar.png" alt="arabic-language-img" />
            AR
          </a>
        </li>
      </ul>
    </div>
  );
}
