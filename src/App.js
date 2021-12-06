import React from "react";
import "./style.css";
import MedicalTreament from "./MedicalTreatment";


export default function App() {
  return (
    <div>
       <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/NHS_England_logo.svg"/>
      <MedicalTreament
      treatId="101"
      treatCourseId="102"
      type="cardiology"
      catgegory="high"
      name="Gelu"
      startDate="01/03/2021"
      
      
      />
    </div>
  );
}
