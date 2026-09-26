import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CursorSpotlight from "./components/CursorSpotlight";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");

    // Dark mode is the default theme
    return savedMode !== "light";
  });

  useEffect(() => {
    // Apply theme to the <html> element
    document.documentElement.classList.toggle("dark", darkMode);

    // Remember user's choice
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <CursorSpotlight />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
