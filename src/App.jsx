
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import Crawler from "./pages/Crawler";
import Backend from "./pages/Backend";
import Frontend from "./pages/Frontend";
import Database from "./pages/Database";
import CICD from "./pages/CICD";
import Guide from "./pages/Guide";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="ml-64 flex flex-col min-h-screen w-full">
          <main className="flex-grow p-8 bg-gray-50 text-gray-800">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/crawler" element={<Crawler />} />
              <Route path="/backend" element={<Backend />} />
              <Route path="/frontend" element={<Frontend />} />
              <Route path="/database" element={<Database />} />
              <Route path="/cicd" element={<CICD />} />
              <Route path="/guide" element={<Guide />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </Router>
  );
}