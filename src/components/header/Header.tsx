import { useContext } from "react";
import Headroom from "react-headroom";
import StyleContext from "../../contexts/StyleContext";
import {
  achievementSection,
  blogSection,
  greeting,
  openSource,
  resumeSection,
  skillsSection,
  talkSection,
  workExperiences,
} from "../../portfolio";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import "./Header.scss";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
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
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
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
            <span>Dark / Light</span>
          </li>
          <li>
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
