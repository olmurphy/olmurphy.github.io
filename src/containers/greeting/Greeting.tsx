import { useContext, useEffect } from "react";
import emoji from "react-easy-emoji";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { useAnalyticsContext } from "../../contexts/AnalyticsContext";
import StyleContext from "../../contexts/ThemeContext";
import { greeting } from "../../portfolio";
import "./Greeting.scss";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const { trackEvent } = useAnalyticsContext();

  // Track greeting section visibility
  useEffect(() => {
    if (greeting.displayGreeting) {
      trackEvent('Section', 'View', 'Greeting');
    }
  }, [trackEvent]);

  // Track resume download
  const handleResumeDownload = () => {
    trackEvent('Download', 'Resume', 'PDF');
  };

  // Track contact button click
  const handleContactClick = () => {
    trackEvent('Button', 'Click', 'Contact');
  };

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
            <SocialMedia onSocialMediaClick={(platform) => trackEvent('Social', 'Click', platform)} />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" onClick={handleContactClick} />
              <Button onClick={handleResumeDownload} href="https://olmurphy.github.io/resume/OwenMurphy_Resume_v2.pdf" text="Download my resume" download="OwenMurphy_Resume_v2.pdf" />
            </div>
          </div>
        </div>
        <div className="greeting-image-div"></div>
      </div>
    </div>
  );
}
