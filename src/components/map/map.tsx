import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./map.module.css";
import { useNavigate } from "react-router";
import { useCities } from "../../context/cities.context";
import { useEffect, useState } from "react";
import CountryFlag from "../country-flag/country-flag";
import useQueryUrl from "../../hooks/use-query-url";
import useGeoLocation from "../../hooks/use-geo-location";
import Button from "../button/button";

export default function Map() {
  // States
  const [mapPosition, setMapPosition] = useState<[number, number]>([
    51.505, -0.09,
  ]);
  // Hooks
  const { cities } = useCities();
  const [mapLat, mapLng] = useQueryUrl();
  const {
    position: geoLocationPosition,
    loading: isLoadingPosition,
    getLocation,
  } = useGeoLocation();
  // Variables

  // Effects

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geoLocationPosition) {
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
    }
  }, [geoLocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (
        <Button type="position" onClick={getLocation}>
          {isLoadingPosition ? "Loading..." : "Get my position"}
        </Button>
      )}
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[
              Number(city.position.lat) || 51.505,
              Number(city.position.lng) || -0.09,
            ]}
          >
            <Popup>
              <CountryFlag
                emoji={city.emoji}
                country={city.country}
                width={30}
                height={30}
              />
              {city.cityName}
            </Popup>
          </Marker>
        ))}
        <ChangeCenterOnClick position={mapPosition} />
        <DetectMapClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenterOnClick({ position }: { position: [number, number] }) {
  const map = useMap();
  map.setView(position);

  return null;
}

function DetectMapClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate("/app/form?lat=" + e.latlng.lat + "&lng=" + e.latlng.lng);
    },
  });
  return null;
}
