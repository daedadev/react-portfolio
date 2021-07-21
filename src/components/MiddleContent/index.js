import React from "react";
import "./style.css";

function MiddleContent() {
  return (
    <section id="work" class="left-and-right">
      <section class="left">
        <h1>Work</h1>
      </section>

      <section class="work-right">
        <article class="large-work">
          <div
            style="background-image: url('/Assets/images/dealership.PNG')"
            onclick="location.href='https://github.com/JustinBrubaker7/Dealership';"
          >
            &nbsp;
          </div>

          <p>Dealership</p>
        </article>

        <article class="small-work">
          <div
            style="background-image: url('/Assets/images/pokemon.PNG')"
            onclick="location.href='https://github.com/wron1/team-project';"
          >
            &nbsp;
          </div>

          <p>Pokemon Card Tracker</p>
        </article>

        <article class="small-work">
          <div
            style="background-image: url('/Assets/images/techblog.PNG')"
            onclick="location.href='https://github.com/wron1/tech-blog';"
          >
            &nbsp;
          </div>

          <p>Tech Blog</p>
        </article>

        <article class="small-work">
          <div
            style="background-image: url('/Assets/images/teamprofile.PNG')"
            onclick="location.href='https://github.com/wron1/Team-Profile-Generator';"
          >
            &nbsp;
          </div>

          <p>Team Profile Generator</p>
        </article>

        <article class="small-work">
          <div
            style="background-image: url('/Assets/images/weather.PNG')"
            onclick="location.href='https://github.com/wron1/weather-dashboard';"
          >
            &nbsp;
          </div>

          <p>Weather Dashboard</p>
        </article>

        <article class="small-work">
          <div
            style="background-image: url('/Assets/images/quiz.PNG')"
            onclick="location.href='https://github.com/wron1/code-quiz';"
          >
            &nbsp;
          </div>

          <p>Code Quiz</p>
        </article>

        <article class="small-work">
          <div
            style="background-image: url('/Assets/images/scheduler.PNG')"
            onclick="location.href='https://github.com/wron1/work-day-scheduler';"
          >
            &nbsp;
          </div>

          <p>Work Day Scheduler</p>
        </article>
      </section>
    </section>
  );
}

export default MiddleContent;
