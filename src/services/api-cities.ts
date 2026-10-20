import { CitiesResponse } from "../types/city.type";
import { City } from "../types/city.type";

export async function getCitiesApi(): Promise<CitiesResponse> {
  const response = await fetch(import.meta.env.VITE_API_URL);

  if (!response.ok) {
    throw new Error(`Error fetching cities: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function getCityApi(cityId: string): Promise<City> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${cityId}`);

  if (!response.ok) {
    throw new Error(`Error fetching city: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
