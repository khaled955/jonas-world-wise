import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/home-page";
import Product from "./pages/product";
import NotFound from "./pages/not-found";
import Pricing from "./pages/pricing";
import Login from "./pages/login";

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
