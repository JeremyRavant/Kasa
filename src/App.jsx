import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ApartmentPage from "./pages/ApartmentPage";
import NoPage from "./pages/NoPage";
import '../src/App.scss'


function App() {
  return (
    <div className="body">
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartment/:id" element={<ApartmentPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
