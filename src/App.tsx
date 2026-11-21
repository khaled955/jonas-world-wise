import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/home-page/home-page";
import Pricing from "./pages/pricing/pricing";
import Product from "./pages/product/product";
import Login from "./pages/login/login";
import NotFound from "./pages/not-found/not-found";
import AppLayout from "./pages/app-layout/app-layout";
import Form from "./components/form/form";
import CityList from "./components/city-list/city-list";
import CountryList from "./components/country-list/country-list";
import City from "./components/city/city";
import Providers from "./context";

export default function App() {


 


  return (
    <>
      <Providers>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate to="cities" replace />} />
              <Route
                path="cities"
                element={
                  <CityList
                   
                  />
                }
              />
              <Route
                path="cities/:cityId"
                element={
                  <City
                  />
                }
              />
              <Route
                path="countries"
                element={
                  <CountryList
                  
                  />
                }
              />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Providers>
    </>
  );
}
