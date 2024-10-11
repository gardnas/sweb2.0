import React from "react";
import jobs from "../data/experience.json";

export default function Experience() {
  return (
    <div className="experience-content col-sm-8 col-xs-12">
      <section id="experience">
        <h3 className="experience-title">Experience</h3>
        <div>
          {jobs.map((job, idx) => (
            <div className="job-container mouse-hover-effect" key={idx}>
              <h4>{job.title}</h4>
              <p className="org">
                {job.organization}, {job.dates}
              </p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
