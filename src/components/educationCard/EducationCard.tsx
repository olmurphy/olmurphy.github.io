import { useContext } from "react";
import StyleContext from "../../contexts/ThemeContext";
import { School } from "../../portfolio";
import "./EducationCard.scss";

interface EducationCardProps {
  school: School
}

export default function EducationCard({ school }: Readonly<EducationCardProps>) {

  const GetDescBullets = ({ descBullets }: { descBullets: string[] }) => {
    if (!descBullets) return null;
    return descBullets?.map((item: string) => (
      <li key={item} className="subTitle">
        {item}
      </li>
    ));
  };
  
  // Simple markdown parser for basic formatting like italics
  const parseMarkdown = (text: string) => {
    // Replace *text* with <em>text</em> for italics
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        // Remove the asterisks and wrap in em tag
        return <em key={index}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };
  
  const { isDark } = useContext(StyleContext);

  if (!school.logo) console.error(`Image of ${school.schoolName} is missing in education section`);
  return (
    <div>
      <div className="education-card">
        {school.logo && (
          <div className="education-card-left">
            <a href={school.website}>
            <img
              crossOrigin={"anonymous"}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
              
            />
            </a>
            
          </div>
        )}
        <div className="education-card-right">
          <h5 className="education-text-school">{school.schoolName}</h5>

          <div className="education-text-details">
            <h5 className={isDark ? "dark-mode education-text-subHeader" : "education-text-subHeader"}>
              {school.subHeader}
            </h5>
            <p className={`${isDark ? "dark-mode" : ""} education-text-duration`}>{school.duration}</p>
            <p className="education-text-desc">{parseMarkdown(school.desc)}</p>
            {school?.descBullets && <div className="education-text-bullets">
              <div>hello?</div>
              <ul>
                {GetDescBullets({ descBullets: school.descBullets })}
              </ul>
            </div>}
          </div>
        </div>
      </div>
      <div className="education-card-border"></div>
    </div>
  );
}
