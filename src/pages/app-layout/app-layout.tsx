import Map from "../../components/map/map";
import SideBar from "../../components/side-bar/side-bar";
import { City } from "../../types/city.type";
import styles from './app-layout.module.css'

type AppLayoutProps = {
  cities: City[];
};

export default function AppLayout({ cities }: AppLayoutProps) {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map cities={cities} />
    </div>
  );
}
