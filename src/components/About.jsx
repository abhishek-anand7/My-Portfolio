function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2 className="section-title">about</h2>

        <div className="about-grid">
          <div className="about-bio">
            <p>
              I enjoy building modern web applications that are
              simple, responsive and easy to use.
            </p>

            <p>
              My work sits between frontend and backend development.
              I enjoy creating interfaces with React and Next.js,
              while also working with APIs, authentication,
              databases and server-side applications.
            </p>
          </div>

          <div className="about-skills">
            <div className="skill-group">
              <h3>frontend</h3>
              <p>
                HTML, CSS, JavaScript, React, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="skill-group">
              <h3>backend</h3>
              <p>
                Node.js, Express.js, MongoDB, REST APIs
              </p>
            </div>

            <div className="skill-group">
              <h3>tools</h3>
              <p>
                Git, GitHub, VS Code, Vercel, Postman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;