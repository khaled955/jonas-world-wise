import styles from "./city-list.module.css";
import Spinner from "../spinner/Spinner";
import Message from "../message/message";
import CityItem from "../city-item/city-item";
import { useCities } from "../../context/cities.context";

export default function CityList() {
  // Hooks
  const { cities, isLoading, error } = useCities();
  if (isLoading) return <Spinner />;
  if (error) return <Message message={error.message} />;
  if (cities.length === 0)
    return (
      <Message message="No cities found. Add a new city by clicking on a city on the map! 🗺️" />
    );
  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city}  />
      ))}
    </div>
  );
}
