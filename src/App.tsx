import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import { ContactUsPage } from "./pages/Contactus";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
