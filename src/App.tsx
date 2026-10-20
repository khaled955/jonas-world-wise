import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/home-page/home-page";
import Pricing from "./pages/pricing/pricing";
import Product from "./pages/product/product";
import Login from "./pages/login/login";
import NotFound from "./pages/not-found/not-found";
import AppLayout from "./pages/app-layout/app-layout";
import Form from "./components/form/form";
import CityList from "./components/city-list/city-list";
import { getCitiesApi } from "./services/api-cities";
import { useEffect, useState } from "react";
import { City } from "./types/city.type";
import CountryList from "./components/country-list/country-list";

export default function App() {
  // States
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Effects
  useEffect(() => {
    async function fetchCities() {
      try {
        setLoading(true);
        const cities = await getCitiesApi();
        setCities(cities);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" replace />} />
            <Route
              path="cities"
              element={
                <CityList cities={cities} isLoading={loading} error={error} />
              }
            />
            <Route path="countries" element={<CountryList cities={cities} isLoading={loading} error={error}/>} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
