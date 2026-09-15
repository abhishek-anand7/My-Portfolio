function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <h2 className="contact-title">
          Let's talk.
        </h2>

        <a
          className="email-link"
          href="mailto:your@email.com"
        >
          ab.work2103@gmail.com
        </a>

        <div className="contact-secondary">
          <a
            href="https://github.com/abhishek-anand7"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-anand03"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="/resume.pdf">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;