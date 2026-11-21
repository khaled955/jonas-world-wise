// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./form.module.css";
import Button from "../button/button";
import BackButton from "../../ui/back-button";
import useQueryUrl from "../../hooks/use-query-url";
import { fetchCityByCoordinates } from "../../services/api-cities";

function Form() {
  // Navigation
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [lat, lng] = useQueryUrl();

  useEffect(() => {
    async function fetchLocation() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCityByCoordinates(lat, lng);
        setCityName(
          data.city ||
            data.locality ||
            data.principalSubdivision ||
            "Unknown location",
        );
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchLocation();
  }, [lat, lng]);

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>

        <BackButton />
      </div>
    </form>
  );
}

export default Form;
