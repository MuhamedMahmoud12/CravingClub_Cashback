import styles from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NAV_LINKS from "../data/link-routes";
import { useUserData } from "../context/UserContext";
export default function NavLinks() {
  const { token } = useAuth();
  const { userData, loading } = useUserData();
  // console.log(userData);
  return (
    <div className={styles["nav-links"]}>
      <ul className={styles["nav-links-ul"]}>
        {NAV_LINKS.map((link, index) => {
          return (
            <li key={index}>
              <NavLink key={index * 2} to={`${link.href}`}>
                {link.content}
              </NavLink>
            </li>
          );
        })}

        <li className={styles["nav-reservation-li"]}>
          <NavLink
            className={`${styles["nav-reservation-link"]} ${styles["no-hover"]}`}
          >
            <span className={styles["nav-reservation-span"]}>Reservation:</span>
            +966 54 798 4094
          </NavLink>
        </li>
        <li className={styles["nav-primeclub-li"]}>
          {!token ? (
            <NavLink
              className={`${styles["nav-primeclub-link"]} ${styles["no-hover"]}`}
              id="prime-club-btn"
              to="/sign-in"
            >
              Prime Club
            </NavLink>
          ) : (
            <NavLink id="prime-club-btn" to="/profile">
              <img src="../assets/user.png" alt="profile-pic" width="26px" />
              <span>{loading ? "Guest" : userData?.name || ""}</span>
            </NavLink>
          )}
        </li>
        <li className="nav-lang-li">
          <NavLink
            href="#"
            className={`${styles["nav-lang-link"]} ${styles["no-hover"]}`}
          >
            <img src="../assets/icons/ar.png" alt="arabic-language-img" />
            AR
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
