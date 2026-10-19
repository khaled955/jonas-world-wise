import Map from "../../components/map/map";
import SideBar from "../../components/side-bar/side-bar";
import styles from './app-layout.module.css'
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map/>
    </div>
  );
}
