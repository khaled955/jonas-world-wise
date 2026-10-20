import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./map.module.css";
import { useSearchParams } from "react-router";
import { City } from "../../types/city.type";

type MapProps = {
  cities: City[];
};

export default function Map({ cities }: MapProps) {
  // Hooks
  const [searchParams] = useSearchParams();
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={[
          Number(searchParams.get("lat")) || 51.505,
          Number(searchParams.get("lng")) || -0.09,
        ]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[
              Number(city.position.lat) || 51.505,
              Number(city.position.lng) || -0.09,
            ]}
          >
            <Popup>{city.cityName}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}


