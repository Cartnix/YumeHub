import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import HeaderApp from "../widgets/Header/ui/HeaderApp";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderApp /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
