import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import Introduction from "./pages/Introduction";
import Architecture from './pages/Architecture';
import Backend from './pages/Backend';
import Frontend from './pages/Frontend';
import Crawler from './pages/Crawler';
import Database from './pages/Database';
import Docker from './pages/Docker';
import CICD from './pages/CICD';
import Ansible from './pages/Ansible';
import Keycloak from './pages/Keycloak';
import Setup from './pages/Setup';
import Conclusion from './pages/Conclusion';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar fixa */}
        <Navbar />

        {/* Conteúdo principal */}
        <div className="ml-64 flex flex-col min-h-screen w-full">
          <main className="flex-grow p-8 bg-gray-100 text-gray-800">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
              <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/crawler" element={<Crawler />} />
                <Route path="/database" element={<Database />} />
                <Route path="/backend" element={<Backend />} />
                <Route path="/frontend" element={<Frontend />} />
                <Route path="/docker" element={<Docker />} />
                <Route path="/ci-cd" element={<CICD />} />
                <Route path="/ansible" element={<Ansible />} />
                <Route path="/keycloak" element={<Keycloak />} />
                <Route path="/setup" element={<Setup />} />
                <Route path="/conclusion" element={<Conclusion />} />
              </Routes>
            </div>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
