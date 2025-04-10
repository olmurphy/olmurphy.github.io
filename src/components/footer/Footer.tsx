import { useContext } from "react";
import StyleContext from "../../contexts/ThemeContext";
import { socialMediaLinks } from "../../portfolio";
import "./Footer.scss";

function Footer() {
  const { isDark } = useContext(StyleContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={isDark ? "dark-footer footer" : "footer"}>
      <div className="footer-content">
        <div className="footer-social">
          {socialMediaLinks.display && (
            <div className="social-links">
              {socialMediaLinks.github && (
                <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {socialMediaLinks.linkedin && (
                <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
              {socialMediaLinks.gmail && (
                <a href={`mailto:${socialMediaLinks.gmail}`}>
                  <i className="far fa-envelope"></i>
                </a>
              )}
              {socialMediaLinks.twitter && (
                <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              )}
            </div>
          )}
        </div>
        <div className="footer-copyright">
          <p>Copyright © Owen L. Murphy {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 