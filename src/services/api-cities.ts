import { CitiesResponse } from "../types/city.type";

export async function getCitiesApi(): Promise<CitiesResponse> {
  const response = await fetch(import.meta.env.VITE_API_URL);

  if (!response.ok) {
    throw new Error(`Error fetching cities: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
