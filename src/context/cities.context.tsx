/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { City } from "../types/city.type";
import { getCitiesApi, getCityApi } from "../services/api-cities";

type CitiesContextType = {
  cities: City[];
  isLoading: boolean;
  error: Error | null;
  currentCity: City | null;
  fetchCity: (cityId: string) => Promise<void>;
};

type CitiesProviderProps = {
  children: React.ReactNode;
};
const CitiesContext = createContext<CitiesContextType | null>(null);

export default function CitiesProvider({ children }: CitiesProviderProps) {
  // States
  const [cities, setCities] = useState<City[]>([]);
  const [currentCity, setCurrentCity] = useState<City | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Effects
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const cities = await getCitiesApi();
        setCities(cities);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  const fetchCity = useCallback(async (cityId: string) => {
    if (!cityId) return;

    try {
      setIsLoading(true);
      setError(null);
      const city = await getCityApi(cityId);
      setCurrentCity(city);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, error, currentCity, fetchCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);

  if (!context) {
    throw new Error("useCities must be used within a CitiesProvider");
  }

  return context;
}
