import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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

  const toggleTheme = (event) => {
    const button = event.currentTarget;

    const rect = button.getBoundingClientRect();

    const viewportWidth = window.visualViewport?.width || window.innerWidth;

    const viewportHeight = window.visualViewport?.height || window.innerHeight;

    // Button center relative to the viewport
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate a radius large enough to cover the entire viewport
    const maxX = Math.max(x, viewportWidth - x);

    const maxY = Math.max(y, viewportHeight - y);

    const radius = Math.hypot(maxX, maxY);

    const updateTheme = () => {
      setDarkMode((prev) => !prev);
    };

    // Fallback for browsers without View Transitions
    if (!document.startViewTransition) {
      updateTheme();
      return;
    }

    const transition = document.startViewTransition(updateTheme);

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
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
