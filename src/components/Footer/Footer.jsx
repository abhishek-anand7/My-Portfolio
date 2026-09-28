import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p className="footer-text">
          Designed with Claude Design, crafted in Visual Studio Code, and built with
          React.js &amp; Tailwind CSS. Deployed with Vercel.
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Abhishek Anand
        </p>
      </div>
    </footer>
  );
}

export default Footer;