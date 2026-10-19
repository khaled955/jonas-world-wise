import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/home-page/home-page";
import Pricing from "./pages/pricing/pricing";
import Product from "./pages/product/product";
import Login from "./pages/login/login";
import NotFound from "./pages/not-found/not-found";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
