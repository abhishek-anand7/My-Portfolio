import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import CursorSpotlight from "./components/CursorSpotlight/CursorSpotlight";
import BackToTop from "./components/BackToTop/BackToTop";

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

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

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
