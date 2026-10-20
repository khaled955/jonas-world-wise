import { useParams} from "react-router";
import { formatDate } from "../../utils/formate-date";
import CountryFlag from "../country-flag/country-flag";
import styles from "./city.module.css";
import { useEffect, useState } from "react";
import { City as cityType } from "../../types/city.type";
import { getCityApi } from "../../services/api-cities";
import Spinner from "../spinner/Spinner";
import Message from "../message/message";

type CityProps = {
  onSetCurrentCity: (city: cityType) => void;
  currentCity: cityType | null;
};

function City({ onSetCurrentCity, currentCity }: CityProps) {
  // States
  const { cityId } = useParams<{ cityId: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Effects
  useEffect(() => {
    async function fetchCity() {
      if (!cityId) return;

      try {
        setIsLoading(true);
        setError(null);
        const city = await getCityApi(cityId);
        onSetCurrentCity(city);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCity();
  }, [cityId, onSetCurrentCity]);

  if (!cityId) {
    return <div>City ID is missing</div>;
  }

  if (isLoading) return <Spinner />;

  if (error) return <Message message={error.message} />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          {currentCity && (
            <CountryFlag
              emoji={currentCity.emoji}
              country={currentCity.country}
            />
          )}
          {currentCity?.cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {currentCity?.cityName} on</h6>
        <p>{formatDate(currentCity?.date || null)}</p>
      </div>

      {currentCity?.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{currentCity?.notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${currentCity?.cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {currentCity?.cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>{/* <BackButton /> */}</div>
    </div>
  );
}

export default City;
