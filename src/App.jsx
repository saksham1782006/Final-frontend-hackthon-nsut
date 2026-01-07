import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

import Dashboard from "./pages/Dashboard";
import MapPage from "./pages/MapPage";
import Analytics from "./pages/Analytic";
import AboutUs from "./pages/AboutUs";

function App() {
  const location = useLocation();

  const showSidebar =
    location.pathname === "/" ||
    location.pathname === "/analytics";

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden min-h-0">
        {showSidebar && <Sidebar />}
        
        <main className="flex-1 overflow-hidden bg-gray-50 min-h-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
