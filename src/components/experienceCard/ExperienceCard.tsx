import { WorkExperience } from "../../portfolio";
import "./ExperienceCard.scss";

interface ExperienceCardProps {
  experience: WorkExperience;
}

export function ExperienceCard({ experience }: Readonly<ExperienceCardProps>) {
  return (
    <div className="timeline-item">
      <div className="timeline-date">
        {experience.startDate} - {experience.endDate}
      </div>
      <div className="timeline-dot-line">
        <div className="timeline-dot"></div>
        {<div className="timeline-line"></div>}
      </div>
      <div className="timeline-card">
        <h3>{experience.company}</h3>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}
