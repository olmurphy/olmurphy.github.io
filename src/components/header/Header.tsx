import { useContext, useEffect } from "react";
import darkIcon from "../../assets/icon/theme_dark_icon.svg";
import lightIcon from "../../assets/icon/theme_light_icon.svg";
import StyleContext from "../../contexts/ThemeContext";
import { useAnalyticsContext } from "../../contexts/AnalyticsContext";
import {
  achievementSection,
  blogSection,
  greeting,
  openSource,
  resumeSection,
  skillsSection,
  talkSection,
} from "../../portfolio";
import "./Header.scss";
import { ThemeIcon } from "./ThemeIcon";

function Header() {
  const { isDark, changeTheme } = useContext(StyleContext);
  const { trackEvent } = useAnalyticsContext();
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  // Track theme changes
  const handleThemeChange = () => {
    changeTheme();
    trackEvent('Theme', 'Toggle', isDark ? 'Light' : 'Dark');
  };

  // Track navigation clicks
  const handleNavigation = (section: string) => {
    trackEvent('Navigation', 'Click', section);
  };

  return (
    <header className={isDark ? "dark-menu header" : "header"}>
      <a href="/" className="logo" onClick={() => handleNavigation('Home')}>
        <span className="logo-name">{greeting.username}</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
      </label>
      <ul className={isDark ? "dark-menu menu" : "menu"}>
        {viewSkills && (
          <li>
            <a href="#skills" onClick={() => handleNavigation('Skills')}>Skills</a>
          </li>
        )}
        <li>
          <a href="#experience" onClick={() => handleNavigation('Experience')}>Work Experiences</a>
        </li>
        {viewOpenSource && (
          <li>
            <a href="#opensource" onClick={() => handleNavigation('OpenSource')}>Open Source</a>
          </li>
        )}
        {viewAchievement && (
          <li>
            <a href="#achievements" onClick={() => handleNavigation('Achievements')}>Achievements</a>
          </li>
        )}
        {viewBlog && (
          <li>
            <a href="#blogs" onClick={() => handleNavigation('Blogs')}>Blogs</a>
          </li>
        )}
        {viewTalks && (
          <li>
            <a href="#talks" onClick={() => handleNavigation('Talks')}>Talks</a>
          </li>
        )}
        {viewResume && (
          <li>
            <a href="#resume" onClick={() => handleNavigation('Resume')}>Resume</a>
          </li>
        )}
        <li>
          <a href="#contact" onClick={() => handleNavigation('Contact')}>Contact Me</a>
        </li>
        <li>
          <button onClick={handleThemeChange}>
            <ThemeIcon src={isDark ? lightIcon : darkIcon} />
          </button>
        </li>
      </ul>
    </header>
  );
}
export default Header;
