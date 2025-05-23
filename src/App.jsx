import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import { lazy } from "react";
import "../src/global.css";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog.jsx"));
const CatalogElement = lazy(() =>
  import("./pages/CatalogElement/CatalogElement.jsx")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:id" element={<CatalogElement />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
