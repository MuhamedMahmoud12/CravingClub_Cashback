import styles from "../styles/Header.module.css";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
export default function Header() {
  return (
    <header id="navbar">
      <div className="container-fluid">
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <a href="#">
              <img src="/assets/craving.png" alt="Craving_Club_logo" />
            </a>
          </div>
          <NavLinks />
          <NavLinksMobile />
        </nav>
      </div>
    </header>
  );
}
