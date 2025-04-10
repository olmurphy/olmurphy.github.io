import { WorkExperience } from "../../portfolio";
import { useContext } from "react";
import StyleContext from "../../contexts/ThemeContext";
import "./ExperienceCard.scss";

interface ExperienceCardProps {
  experience: WorkExperience;
}

export function ExperienceCard({ experience }: Readonly<ExperienceCardProps>) {
  const { isDark } = useContext(StyleContext);
  
  return (
    <div className="timeline-item">
      <div className="timeline-date">
        {experience.startDate} - {experience.endDate}
      </div>
      <div className="timeline-dot-line">
        <div className="timeline-dot"></div>
        <div className="timeline-line"></div>
      </div>
      <div className={`timeline-card ${isDark ? "dark-mode" : ""}`}>
        <h3>{experience.company}</h3>
        <span>{experience.role}</span>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
