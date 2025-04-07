import { useContext } from "react";
import Headroom from "react-headroom";
import darkIcon from "../../assets/icon/theme_dark_icon.svg";
import lightIcon from "../../assets/icon/theme_light_icon.svg";
import StyleContext from "../../contexts/StyleContext";
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
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo-name">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{ color: "white" }}>
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <button onClick={() => changeTheme()}>
              <ThemeIcon src={isDark ? lightIcon : darkIcon} />
            </button>
          </li>
          {/* <li>
            <ToggleSwitch />
          </li> */}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
