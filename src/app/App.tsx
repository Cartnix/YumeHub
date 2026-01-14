import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderApp from "../widgets/Header/ui/HeaderApp";
import { CatalogPage } from "../pages/Catalog";
import FooterApp from "../widgets/Footer/FooterApp";
import AnimePage from "../pages/AnimePage/ui/AnimePage";
import { ProfilePage } from "../pages/ProfilePage";
import { HomePage } from "../pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderApp /> 
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Catalog" element={<CatalogPage />}/>
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/auth/callback" element={<Navigate to="/" replace/>}></Route>
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
      </>
      <FooterApp />
    </BrowserRouter>
  );
}
