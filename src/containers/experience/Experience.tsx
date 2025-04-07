import { ExperienceCard } from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import "./Experience.scss";

export default function Experience() {
  return (
    <div className="experience-timeline">
      <h1 className="education-heading">Experience</h1>
      {workExperiences.map((experience) => (
        <ExperienceCard key={experience.startDate} experience={experience}/>
      ))}
    </div>
  );
}
