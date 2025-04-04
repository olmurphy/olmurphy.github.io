import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo, School } from "../../portfolio";

export default function Education() {
  return (
    <div className="education-section" id="education">
      <h1 className="education-heading">Education</h1>
      <div className="education-card-container">
        {educationInfo.map((school: School, index) => (
          <EducationCard key={school.schoolName} school={school} />
        ))}
      </div>
    </div>
  );
}