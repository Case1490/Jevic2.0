import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import MainPage from "./components/MainPage"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nosotros" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
