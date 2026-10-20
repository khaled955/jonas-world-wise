import styles from "./city-list.module.css";
import Spinner from "../spinner/Spinner";
import Message from "../message/message";
import CityItem from "../city-item/city-item";
import { City } from "../../types/city.type";

type CityListProps = {
  cities: City[];
  isLoading: boolean;
  error: Error | null;
  currentCity: City | null;
};

export default function CityList({ cities, isLoading, error, currentCity }: CityListProps) {
  if (isLoading) return <Spinner />;
  if (error) return <Message message={error.message} />;
  if (cities.length === 0)
    return (
      <Message message="No cities found. Add a new city by clicking on a city on the map! 🗺️" />
    );
  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} currentCity={currentCity} />
      ))}
    </div>
  );
}
