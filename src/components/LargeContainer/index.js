import React from "react";
import "./style.css";
import AboutMe from "../AboutMe";
import Project from "../Project";

function LargeContainer() {
  return (
    <section className="large-container">
      <AboutMe />
      <section id="work" className="left-and-right">
        <section className="left">
          <h1>Work</h1>
        </section>

        <section className="work-right">
          <Project
            directory={"https://github.com/JustinBrubaker7/counsel-central"}
            title={"Counsel Central"}
            image={`url('/images/counsel.PNG')`}
            classy={"large-work"}
          />

          <Project
            directory={"https://github.com/JustinBrubaker7/Dealership"}
            title={"Dealership"}
            image={`url('/images/dealership.PNG')`}
            classy={"large-work"}
          />

          <Project
            directory={"https://github.com/wron1/pokemon-tracker"}
            title={"Pokemon Card Tracker"}
            image={`url('/images/pokemon.PNG')`}
            classy={"small-work"}
          />

          <Project
            directory={"https://github.com/wron1/tech-blog"}
            title={"Tech Blog"}
            image={`url('/images/techblog.PNG')`}
            classy={"small-work"}
          />

          <Project
            directory={"https://github.com/wron1/team-profile-generator"}
            title={"Team Profile Generator"}
            image={`url('/images/teamprofile.PNG')`}
            classy={"small-work"}
          />

          <Project
            directory={"https://github.com/wron1/weather-dashboard"}
            title={"Weather Dashboard"}
            image={`url('/images/weather.PNG')`}
            classy={"small-work"}
          />

          <Project
            directory={"https://github.com/wron1/code-quiz"}
            title={"Code Quiz"}
            image={`url('/images/quiz.PNG')`}
            classy={"small-work"}
          />

          <Project
            directory={"https://github.com/wron1/work-day-scheduler"}
            title={"Work Day Scheduler"}
            image={`url('/images/scheduler.PNG')`}
            classy={"small-work"}
          />
        </section>
      </section>
    </section>
  );
}

export default LargeContainer;
