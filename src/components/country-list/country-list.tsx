import { City, Country } from "../../types/city.type";
import CountryItem from "../country-item/country-item";
import Message from "../message/message";
import Spinner from "../spinner/Spinner";
import styles from "./country-list.module.css";

type CountryListProps = {
  cities: City[];
  isLoading: boolean;
  error: Error | null;
};

export default function CountryList({
  cities,
  isLoading,
  error,
}: CountryListProps) {
  if (isLoading) return <Spinner />;
  if (error) return <Message message="Error loading countries" />;
  if (cities.length === 0) return <Message message="No countries found" />;

  // Variables

  const uniqueCountries = cities.reduce((acc: Country[], currentCity) => {
    if (!acc.map((el) => el.country).includes(currentCity.country)) {
      return [
        ...acc,
        { country: currentCity.country, emoji: currentCity.emoji },
      ];
    }
    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {uniqueCountries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
