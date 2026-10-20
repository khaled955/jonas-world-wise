import { Country } from "../../types/city.type";
import CountryFlag from "../country-flag/country-flag";
import styles from "./country-item.module.css";
type CountryItemProps = {
  country: Country;
};

function CountryItem({ country }: CountryItemProps) {
  return (
    <li className={styles.countryItem}>
      <CountryFlag emoji={country.emoji} country={country.country} />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
