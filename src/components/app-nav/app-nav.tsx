import { NavLink } from "react-router";
import { LINKS } from "../../constants/app.navs.constant";
import styles from "./app-nav.module.css";
import Logo from "../logo/logo";
function AppNav() {
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

export default AppNav;
