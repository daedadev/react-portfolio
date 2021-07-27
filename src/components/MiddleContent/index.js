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
            style={{ backgroundImage: `url('/Assets/images/weather.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/tech-blog")
            }
          ></div>

          <p>Dealership</p>
        </article>

        <article class="small-work">
          <div
            style={{ backgroundImage: `url('/Assets/images/weather.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/tech-blog")
            }
          ></div>

          <p>Pokemon Card Tracker</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/Assets/images/weather.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/tech-blog")
            }
          ></div>

          <p>Tech Blog</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/Assets/images/weather.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/tech-blog")
            }
          ></div>

          <p>Team Profile Generator</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/Assets/images/weather.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/tech-blog")
            }
          ></div>

          <p>Weather Dashboard</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/Assets/images/weather.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/tech-blog")
            }
          ></div>

          <p>Code Quiz</p>
        </article>

        <article className="small-work">
          <div
            style={{ backgroundImage: `url('/Assets/images/weather.PNG')` }}
            onClick={(event) =>
              (window.location.href = "https://github.com/wron1/tech-blog")
            }
          ></div>

          <p>Work Day Scheduler</p>
        </article>
      </section>
    </section>
  );
}

export default MiddleContent;
