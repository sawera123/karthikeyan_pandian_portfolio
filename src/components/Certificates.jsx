import React from "react";
import "./Certificates.css";

const certificates = [
  {
    title : "Project Management, PMP, PMI Certification",
    tag: "Project Management Professional (PMP)®",
    desc: "Globally recognized certification demonstrating knowledge and experience in leading and directing projects using predictive, agile, and hybrid approaches.",
    issuer: "Project Management Institute (PMI)",
    year: "2025",
    url: "https://www.credly.com/badges/bd63ef6a-9e0e-46f9-8613-055e699df5b3"
  },
  {
    title: "Project Scheduling, Primavera P6, Oracle",
    tag: "Primavera P6 Professional",
    desc: "Comprehensive training in Oracle Primavera P6 Professional for effective project scheduling, resource management, and progress tracking in complex projects.",
    issuer: "Oracle",
    year: "2025",
    url: "https://mylearn.oracle.com/ou/learning-path/primavera-p6-professional/94431"
  },
  {
    title: "Project Planning & Scheduling For Construction Management",
    tag: "Primavera P6",
    desc: "Skilled in Primavera P6, a robust project management tool for planning, scheduling, and controlling complex projects, ensuring efficient resource utilization and timely project delivery.",
    issuer: "CADD® CENTER",
    year: "2020",
    url: "https://registry.caddcentre.com/ghbji.php?asdsad=YytRNTUrQ1A1b1RZNTVwS0svZ2l5bmZtRVB2YkF2WG9GRjUxcGllODREWnpHNlluNGpEcUljK1dKRVByOW9MSQ==%27"
  },
  {
    title: "4D Scheduling, Project Visualization, Construction Management",
    tag: "SYNCHRO 4D Bentley",
    desc: "Proficient in using SYNCRO 4D for project planning, 4D scheduling, and visualizing construction projects to enhance project execution and stakeholder communication.",
    issuer: "LinkedIn Learning",
    year: "2024",
    url: "https://www.linkedin.com/learning/certificates/faa86a86998bfbc945b0a454ad5c10f72e364b2a8b11e9d7fcb806a3b05dc52e"
  },
  {
    title: "Microsoft Full Stack PowerBI Developer",
    tag: "Power Business Intelligence (FSBI)®",
    desc: "Turn complex project data into clear, actionable insights through interactive dashboards and real-time visualizations.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst-associate/"
  },
  {
    title: "Excel Automation, VBA, Macros",
    tag: "Excel Visual Basic for Application Developer",
    desc: "Programming language used to automate tasks and create custom functions in Microsoft Excel",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2022",
    url: "https://learn.microsoft.com/en-us/certifications/excel-2016-expert/"
  },
  {
    title: "SQL, Data Analysis, Reporting Specialist",
    tag: "SQL (Structured Query Languange)",
    desc: "Certified SQL Reporting Specialist skilled in writing advanced queries, managing relational databases, and transforming raw data into actionable business insights.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://education.oracle.com/oracle-database-sql/"
  },
  
  {
    title: "Power Apps, Workflow Automation, Report Generation",
    tag: "Microsoft Power Apps",
    desc: "Certified in designing and implementing custom apps and automated workflows using Microsoft Power Apps, enabling efficient project tracking and reporting at both micro and macro levels.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://www.datacamp.com"
  },

  {
    title: "Automation, Workflow Management, Process Optimization",
    tag: "Microsoft Power Automate",
    desc: "Proficient in automating workflows, integrating systems, and streamlining repetitive tasks using Microsoft Power Automate to enhance efficiency in project management and reporting.",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://www.datacamp.com"
  },
    {
    title: "Data Management, Process Optimization",
    tag: "Microsoft Excel Associate",
    desc: "Certified in core Microsoft Excel skills, including data entry, formatting, formulas, charts, tables, and pivot tables. Proficient in using Excel for data analysis, reporting, and business productivity. ",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://www.excelgoodies.com/VerifyCertificate/VerifyCertificateFSBI/Index?CNo1=CO21&CNo2=05GF"
  },    
  {
    title: "Data Analyst, Dashboard Creation",
    tag: "Data Analysis & Dashboard Associate using Power BI",
    desc: "Certified in core Microsoft Excel skills, including data entry, formatting, formulas, charts, tables, and pivot tables. Proficient in using Excel for data analysis, reporting, and business productivity. ",
    issuer: "Excel Goodies - Microsoft Gold Certified Partner",
    year: "2025",
    url: "https://www.excelgoodies.com/VerifyCertificate/VerifyCertificateFSBI/Index?CNo1=QL08&CNo2=64BU"
  },
];

const tools = [
  { name: "AutoCAD",   level: "ADV", color: "#00B386" },  
  { name: "4D Scheduling",    level: "ADV", color: "#00B386" },
  { name: "5D Scheduling",    level: "ADV", color: "#00B386" },
  { name: "Power Query",   level: "ADV", color: "#00B386" }, 
  { name: "MS Office 360",   level: "ADV", color: "#00B386" },
  { name: "SAP ERP",    level: "ADV", color: "#00B386" },
  { name: "SAP ERP Automation",    level: "ADV", color: "#00B386" },    
  { name: "Navis Work",    level: "Inter", color: "#FBBF24" }, 
  { name: "SolidWorks",   level: "Inter", color: "#FBBF24" }, 
 
];



const Certificates = () => {
  return (
    <div>
    <main className="main"> 
    <div className="custom-section-container">
      <h2 className="certificate-section-title">Certificates & Tools</h2>

      <h3 className="sub-title">Certificates</h3>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <a
            key={index}
            className="certificate-card"
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cert-tag">{cert.tag}</div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-details">
              <p>{cert.desc}</p>
              <span>
                {cert.issuer} • {cert.year}
              </span>
            </div>
          </a>
        ))}
      </div>

      <h3 className="sub-title">Tools & Technologies</h3>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <span className="tool-name">{tool.name}</span>
            <span className="tool-level" style={{ backgroundColor: tool.color }}>
              {tool.level}
            </span>
          </div>
        ))}
      </div>
    </div>

    </main>
    </div>
  );
};

export default Certificates;