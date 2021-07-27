import React from "react";
import "./style.css";

function MiddleContent() {
  return (
    <section id="work" className="left-and-right">
      <section className="left">
        <h1>Work</h1>
      </section>

      <section className="work-right">
        <article className="large-work">
          <div
            style={{ backgroundImage: `url('/images/counsel.PNG')` }}
            onClick={(event) =>
              (window.location.href =
                "https://github.com/JustinBrubaker7/counsel-central")
            }
          ></div>

          <p>Counsel Central</p>
        </article>

        <article className="large-work">
          <div
            style={{ backgroundImage: `url('/images/dealership.PNG')` }}
            onClick={(event) =>
              (window.location.href =
                "https://github.com/JustinBrubaker7/Dealership")
            }
          ></div>

          <p>Dealership</p>
        </article>

        <article class="small-work">
          <div
            style={{ backgroundImage: `url('/images/pokemon.PNG')` }}
            onClick={(event) =>
              (window.location.href =
                "https://github.com/wron1/pokemon-tracker")
            }
          ></div>

          <p>Pokemon Card Tracker</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/images/techblog.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/tech-blog")
            }
          ></div>

          <p>Tech Blog</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/images/teamprofile.PNG')` }}
            onClick={(event) =>
              (window.location.href =
                "https://github.com/wron1/team-profile-generator")
            }
          ></div>

          <p>Team Profile Generator</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/images/weather.PNG')` }}
            onClick={(event) =>
              (window.location.href =
                "https://github.com/wron1/weatherr-dashboard")
            }
          ></div>

          <p>Weather Dashboard</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/images/quiz.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/code-quiz")
            }
          ></div>

          <p>Code Quiz</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/images/scheduler.PNG')` }}
            onClick={(event) =>
              (window.location.href =
                "https://github.com/wron1/work-day-scheduler")
            }
          ></div>

          <p>Work Day Scheduler</p>
        </article>
      </section>
    </section>
  );
}

export default MiddleContent;
