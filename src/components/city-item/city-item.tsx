import styles from "./city-item.module.css";
import { City } from "../../types/city.type";
import { formatDate } from "../../utils/formate-date";

type CityItemProps = {
  city: City;
};
export default function CityItem({ city }: CityItemProps) {

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className={styles.date}>{formatDate(city.date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
