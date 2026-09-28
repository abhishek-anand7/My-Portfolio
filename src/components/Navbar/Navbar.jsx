import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import "./ThemeToggle.css";
import "./ScrollProgress.css";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    // Set initial value
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="top">
      <div className="wrap">
        <div className="brand">Abhishek Anand</div>

        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>

          <button
            className={`theme-toggle ${darkMode ? "is-dark" : "is-light"}`}
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            <span className="theme-icon">
              <Sun className="sun-icon" size={18} />
              <Moon className="moon-icon" size={18} />
            </span>
          </button>
        </div>

        {/* Mobile actions */}
        <div className="mobile-actions">
          <button
            className={`theme-toggle ${darkMode ? "is-dark" : "is-light"}`}
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            <span className="theme-icon">
              <Sun className="sun-icon" size={18} />
              <Moon className="moon-icon" size={18} />
            </span>
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {/* Mobile navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#work" onClick={closeMenu}>
          Work
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>

      {/* Scroll progress indicator */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
