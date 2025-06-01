import React, { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";
import "./ResumeSection.css";

const ProjectItem = ({ title, client, details }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-item">
      <div className="project-header" onClick={() => setOpen(!open)}>
        <h5>
          {title} <span>- {client}</span>
        </h5>
        {open ? (
          <ChevronDown size={18} className="icon" />
        ) : (
          <ChevronRight size={18} className="icon" />
        )}
      </div>

      {open && (
        <div className="project-details open">
          <ul>
            {details.map((item, i) => (
              <li key={i}>
                <CheckCircle size={14} className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ResumeSection = () => {
  return (
    <section className="resume-section py-5" id="resume">
      <div className="container">
        {/* Main heading */}
        <h2 className="resume-heading text-center mb-4">Experience</h2>

        {/* Yellow box for Current Responsibilities + Highlighted Skills */}
        <div className="resume-box mb-4">
          {/* Current Responsibilities */}
          <h4 className="section-title">Current Responsibilities</h4>
          <h4 className="section-title">
            UTOC Engineering Pte Ltd, Planning Engineer [Mar 24 - Present]
          </h4>
          <ul className="ps-0 mb-4">
            {[
              "Develop and maintain valid project schedules using Primavera P6 aligned with project scope and objectives.",
              "Plan, schedule, and manage work packages ensuring alignment with overall project timelines.",
              "Monitor and update critical paths and interfaces between project activities to mitigate delays.",
              "Prepare project performance reports including KPIs, cash flow forecasts, resource histograms, progress S-curves, manpower, and quantity tracking.",
              "Establish and maintain project control plans, procedures, and documentation standards.",
              "Coordinate weekly with the procurement team to ensure timely delivery of materials and equipment.",
              "Represent the planning team in daily status calls with clients and internal teams, providing real-time updates on project progress.",
              "Promote continuous improvement through lessons learned, process optimization, and participation in training and development initiatives.",
              "Prepare and submit Effort Estimation Reports and IDM (Integrated Data Management) documents for QAG (Quality Assurance Group) purposes.",
              "Logistics simulation for heavy lifting / complex plan using SYNCHRO 4D.",
            ].map((task, i) => (
              <li key={i}>
                <CheckCircle size={14} className="list-icon" style={{ color: "orange" }} />
                {task}
              </li>
            ))}
          </ul>

          {/* Highlighted Skills */}
          <h4 className="section-title">Notable Abilities</h4>
          <div className="row">
            <div className="col-12 text-start">
              <h6>Functional & Technical</h6>
              <ul className="ps-0">
                {[
                  "Logistics Simulation for the heavy lifting / complex Plan",
                  "Project documentation and product data management",
                  "Advanced Excel automation using VBA",
                  "Collaborative teamwork in cross-functional environments",
                  "Primavera P6, Microsoft Project Plan 3",
                  "Excel VBA, SYNCHRO 4D, Navisworks, SAP, SAP ECTR, Command Center",
                  "SolidWorks, AutoCAD",
                ].map((skill, i) => (
                  <li key={i}>
                    <CheckCircle size={14} className="list-icon" style={{ color: "orange" }} />
                    {skill}
                  </li>
                ))}
              </ul>

              <h6 className="mt-4">Management & Soft Skills</h6>
              <ul className="ps-0">
                {[
                  "Team training and development",
                  "On-time Delivery (OTD) planning",
                  "Root cause analysis and problem solving",
                  "Process optimization and continuous improvement",
                  "Effort estimation & IDM documentation (QAG)",
                ].map((skill, i) => (
                  <li key={i}>
                    <CheckCircle size={14} className="list-icon" style={{ color: "orange" }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className="resume-box mb-4">
          <h4 className="section-title">Projects Undertaken</h4>
          <ProjectItem
            title="BH F&PT Offshore Support"
            client="HCL TECHNOLOGIES [MAR 21 - JAN 25]"
            details={[
              "Role: Planning Engineer",
              "Client: Baker Hughes, USA",
              "Tools: Primavera P6, Excel VBA, Power BI, SQL, Power Apps, Power Automate",
            ]}
          />
          <ProjectItem
            title="Database Migration Oracle to SAP"
            client="HCL TECHNOLOGIES [MAR 21 - AUG 24]"
            details={[
              "Role: Planning Engineer",
              "Client: Baker Hughes, USA",
              "Tools: Primavera P6, Excel VBA, SAP, SAP Automation, Power BI",
            ]}
          />
          <ProjectItem
            title="Spare Parts Creation for SRV and SV Valves"
            client="HCL TECHNOLOGIES [MAR 22 - DEC 23]"
            details={[
              "Role: Planning Engineer",
              "Client: Baker Hughes, USA",
              "Tools: Primavera P6, Excel VBA, SAP, SAP Automation, Power BI",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
