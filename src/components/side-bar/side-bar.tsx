import { Outlet } from "react-router";
import AppNav from "../app-nav/app-nav";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import styles from "./side-bar.module.css";

export default function SideBar() {

  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <Footer />
    </div>
  );
}
