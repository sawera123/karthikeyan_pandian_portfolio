import React from 'react';
import './ServicesSection.css';
import { 
  Star, Smartphone, Globe, 
  MonitorCheck, Wrench, BarChart2, 
  AppWindow, Repeat, LayoutDashboard, HelpingHand 
} from 'lucide-react';

const Services = () => {
  return (
    <main className="main">
      <section id="services" className="services section light-background">
        <div className="container">
          <h1 className="services-section-heading">Services</h1>
          <p>Let’s Build Your Projects with Precision and Cutting-Edge Solutions</p>

          <div className="row">

            {/* Power Productivity Pack */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-bolt card-icon"></i>
                <h2>Power Productivity Pack</h2>
                <ul className="service-list">
                  <li><Wrench size={18} /> Boost Performance & Fix Errors (Excel VBA)</li>
                  <li><BarChart2 size={18} /> Dynamic Dashboards (Power BI)</li>
                  <li><AppWindow size={18} /> Smart App Interfaces (Power Apps)</li>
                  <li><Repeat size={18} /> Workflow Automation (Power Automate)</li>
                </ul>
              </div>
            </div>

            {/* 4D Scheduling & Project Visualization Suite */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-desktop card-icon"></i>

                <h2>Power Productivity Pack</h2>
                <ul className="service-list">
                  <li><BarChart2 size={18} /> 4D Scheduling and Actual vs. Plan Simulation</li>
                  <li><Globe size={18} /> Design Interactive Power BI dashboards & KPI.</li>
                  <li><MonitorCheck size={18} /> Simulation for Complex Lifting Plan</li>
                  <li><Smartphone size={18} /> Customizable Reports for better insights</li>
                </ul>
              </div>
            </div>

            {/* Ultimate Project Automation Pack */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-globe card-icon"></i>
                <h2>Power Productivity Pack</h2>
                <ul className="service-list">
                  <li><Smartphone size={18} /> Seamless Cross-Platform Integration</li>
                  <li><BarChart2 size={18} /> Automated Scheduling & Reporting</li>
                  <li><Repeat size={18}/> Smart Workflow Automation</li>
                  <li><Globe size={18} /> Reduce 80% of Manual Work</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
