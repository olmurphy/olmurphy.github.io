import { useContext } from "react";
import emoji from "react-easy-emoji";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/ThemeContext";
import { greeting } from "../../portfolio";
import "./Greeting.scss";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
              {" "}
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>{greeting.subTitle}</p>
            <div id="resume" className="empty-div"></div>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a href="https://olmurphy.github.io/resume/OwenMurphy_Resume_v2.pdf" download="OwenMurphy_Resume_v2.pdf" className="download-link-button">
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div"></div>
      </div>
    </div>
  );
}
