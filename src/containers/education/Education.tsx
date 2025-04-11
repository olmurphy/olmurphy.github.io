import { useEffect } from "react";
import EducationCard from "../../components/educationCard/EducationCard";
import { useAnalyticsContext } from "../../contexts/AnalyticsContext";
import { educationInfo, School } from "../../portfolio";
import "./Education.scss";

export default function Education() {
  const { trackEvent } = useAnalyticsContext();

  // Track education section visibility
  useEffect(() => {
    trackEvent('Section', 'View', 'Education');
  }, [trackEvent]);

  // Track education card interactions
  const handleEducationCardClick = (schoolName: string) => {
    trackEvent('Education', 'View', schoolName);
  };

  return (
    <div className="education-section" id="education">
      <h1 className="education-heading">Education</h1>
      <div className="education-card-container">
        {educationInfo.map((school: School, index) => (
          <EducationCard 
            key={school.schoolName} 
            school={school} 
            onClick={() => handleEducationCardClick(school.schoolName)}
          />
        ))}
      </div>
    </div>
  );
}