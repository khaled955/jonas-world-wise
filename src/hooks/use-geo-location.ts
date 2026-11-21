import { useCallback, useEffect, useState } from "react";

type Position = {
  lat: number;
  lng: number;
};

type UseGeoLocationReturn = {
  position: Position | null;
  error: Error | null;
  loading: boolean;
  getLocation: () => void;
};

export default function useGeoLocation(
  defaultPosition: Position | null = null,
): UseGeoLocationReturn {
  // States
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError(new Error("Geolocation is not supported"));
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(new Error(err.message || "Failed to get location"));
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return { position, error, loading, getLocation };
}
