import { NavLink } from "react-router";
import Logo from "../logo/logo";
import styles from "./page-nav.module.css";
import { LINKS } from "../../constants/app.navs.constant";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {LINKS.map((link) => (
          <li key={link.path}>
            <NavLink
              className={link.name === "login" ? styles.ctaLink : ""}
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PageNav;
