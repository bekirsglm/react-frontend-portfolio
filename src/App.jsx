// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./components/footer";

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Ana içerik */}
      <main className="flex-1">
        <Routes>
          {/* Ana sayfa */}
          <Route path="/" element={<Home />} />

          {/* Diğer sayfalar */}
          <Route path="/home" element={<Navigate to="/" replace />} /> {/* /home => / yönlendir */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Tanımlanmayan route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
