import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/home";
import HeaderApp from "../widgets/Header/ui/HeaderApp";
import { CatalogPage } from "../pages/Catalog";
import FooterApp from "../widgets/Footer/FooterApp";
import AnimePage from "../pages/AnimePage/ui/AnimePage";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderApp /> 
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<CatalogPage />}/>
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/auth/callback" element={<Navigate to="/" replace/>}></Route>
        </Routes>
      </>
      <FooterApp />
    </BrowserRouter>
  );
}
