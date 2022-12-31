import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Home from "../pages/Home";

const RoutesCustom = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id/" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
    </Routes>
  );
};

export default RoutesCustom;
