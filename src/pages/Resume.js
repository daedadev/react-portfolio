import React from "react";
import ResumeFile from "../components/Resume/";

function Resume() {
  return (
    <section id="work" className="left-and-right">
      <section className="left">
        <h1>Resume</h1>
      </section>

      <section className="work-right">
        <ResumeFile />
      </section>
    </section>
  );
}

export default Resume;
