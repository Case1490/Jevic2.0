import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import AllProducts from "./components/AllProducts";
import NewsProductsPage from "./components/NewsProductsPage";
import LoginPage from "./components/LoginPage"; // Nuevo componente
import RegisterPage from "./components/RegisterPage"; // Nuevo componente

function App() {
  const location = useLocation();

  // Oculta Navbar y Footer en las páginas de "Iniciar Sesión" y "Registrar"
  const hideLayout =
    location.pathname === "/iniciar-sesion" ||
    location.pathname === "/registrar";

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productos" element={<AllProducts />} />
        <Route path="/novedades" element={<NewsProductsPage />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/iniciar-sesion" element={<LoginPage />} />
        <Route path="/registrar" element={<RegisterPage />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
