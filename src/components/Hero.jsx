import ProfileImage from "../assets/ProfileImage.png";

function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-content">
          <div className="hero-text">
            {/* Open to Work Badge */}
            <div className="open-to-work">
              <span className="status-indicator"></span>
              <span>Open to Work</span>
            </div>

            <p className="eyebrow">Full-stack Developer</p>

            <h1 className="headline">
              I build clean interfaces and useful products for the web.
            </h1>

            <p className="lede">
              I'm a developer focused on building modern web applications with
              React, Next.js, TypeScript, Node.js and MongoDB.
            </p>

            <div className="hero-links">
              <a href="#work" className="primary">
                See selected work
              </a>

              <a href="#contact">Get in touch</a>
            </div>
          </div>

          <div className="hero-image">
            <img src={ProfileImage} alt="Abhishek Anand" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
