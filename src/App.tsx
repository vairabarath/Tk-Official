import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import { ContactUsPage } from "./pages/Contactus";
import BlockchainPage from "./pages/projects/Blockchain";
import AITechPage from "./pages/projects/AI";
import IotPage from "./pages/projects/IOT";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/products/iot" element={<IotPage />} />
        <Route path="/products/blockchain" element={<BlockchainPage />} />
        <Route path="/products/ai" element={<AITechPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
