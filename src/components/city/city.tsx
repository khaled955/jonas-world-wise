import { useParams } from "react-router";
import { formatDate } from "../../utils/formate-date";
import CountryFlag from "../country-flag/country-flag";
import styles from "./city.module.css";
import { useEffect } from "react";
import Spinner from "../spinner/Spinner";
import Message from "../message/message";
import { useCities } from "../../context/cities.context";
import BackButton from "../../ui/back-button";

function City() {
  // Hooks
  const { cityId } = useParams<{ cityId: string }>();
  // States
  const { currentCity, fetchCity, isLoading, error } = useCities();

  // Effects
  useEffect(() => {
    if (!cityId) return;
    fetchCity(cityId);
  }, [cityId, fetchCity]);

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

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
