import { useSearchParams } from "react-router";

export default function useQueryUrl() {
  const [searchParams] = useSearchParams();

  const lat = Number(searchParams.get("lat")) || 51.505;
  const lng = Number(searchParams.get("lng")) || -0.09;

  return [lat, lng];
}
