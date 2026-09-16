function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
