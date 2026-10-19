import { NavLink } from "react-router";
import { APP_LINKS } from "../../constants/app.navs.constant";
import styles from './app-nav.module.css'
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        {APP_LINKS.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AppNav;
