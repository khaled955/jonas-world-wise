import styles from "./city-item.module.css";
import { City } from "../../types/city.type";
import { formatDate } from "../../utils/formate-date";
import CountryFlag from "../country-flag/country-flag";
import { Link } from "react-router";

type CityItemProps = {
  city: City;
  currentCity: City | null;
};
export default function CityItem({ city, currentCity }: CityItemProps) {
  return (
    <li>
      <Link
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
        className={`${styles.cityItem} ${currentCity?.id === city.id ? styles["cityItem--active"] : ""}`}
      >
        <CountryFlag emoji={city.emoji} country={city.country} />
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
