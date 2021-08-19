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
            liveApp={
              "https://60f646d401fce500077b77c3--counsel-central.netlify.app/"
            }
            githubApp={"https://github.com/JustinBrubaker7/counsel-central"}
            title={"Counsel Central"}
            image={`url(${process.env.PUBLIC_URL + "/images/counsel.PNG"})`}
            classy={"large-work"}
            info={
              "A simple and easy way for counselors and rehabilitation centers to track, log and better serve there residents. Counsel Central aims to remove the difficulty with MRE software and better serve those in need."
            }
          />

          <Project
            liveApp={"https://JustinBrubaker7.github.io/Dealership/"}
            githubApp={"https://github.com/JustinBrubaker7/Dealership"}
            title={"Dealership"}
            image={`url(${process.env.PUBLIC_URL + "/images/dealership.PNG"})`}
            classy={"large-work"}
            info={
              "This group collaborative project made for a decent challenge tackling a very interesting concept. A dealership webpage with a functioning backend for the dealership owner as well as a functioning frontend for customers which serves that dealer backend. Justin handled the backend dealership portion and Daniel handled the frontend customer portion. The collaborative effort was welcome and very much needed for such a large project. For only having 2 weeks of preparation the execution was more than successful and helped our team grow immensely."
            }
          />

          <Project
            liveApp={"https://wron1.github.io/pokemon-tracker/"}
            githubApp={"https://github.com/wron1/pokemon-tracker"}
            title={"Pokemon Card Tracker"}
            image={`url(${process.env.PUBLIC_URL + "/images/pokemon.PNG"})`}
            classy={"small-work"}
            info={
              "This project was designed to help users search the pokemon card database using specific search criteria based on the pokemons generation, type, and name. After searchig, users will be able to compare te prices of different cards across several marketplaces, and save their preferred cards to return to later. This project was challenging, but interesting and gave us an opportunity to better understand APIs and their deployment, as well as hone our skills in HTML and CSS."
            }
          />

          <Project
            liveApp={"https://desolate-spire-45416.herokuapp.com/"}
            githubApp={"https://github.com/wron1/tech-blog"}
            title={"Tech Blog"}
            image={`url(${process.env.PUBLIC_URL + "/images/techblog.PNG"})`}
            classy={"small-work"}
            info={
              "This project focuses on the use of sequelize and node.js to create a forum in which you can have an account, make posts and make comments on posts. There is a heavy focus on Handlebars as well as sequelize relationships. Handlebars was extremely helpful for keeping the styling fairly simple as well as simplifying the data transfer process between pages. This project was an extremely long one with many different problems to tackle. Even now there is some refinement to be added. The application is currently deployed live on Heroku utilizing JAWS_DB. https://desolate-spire-45416.herokuapp.com/"
            }
          />

          <Project
            liveApp={"https://wron1.github.io/team-profile-generator/"}
            githubApp={"https://github.com/wron1/team-profile-generator"}
            title={"Team Profile Generator"}
            image={`url(${process.env.PUBLIC_URL + "/images/teamprofile.PNG"})`}
            classy={"small-work"}
            info={
              "For this project I was tasked with creating a console interface using Inquirer to allow the user to create a dynamically generated webpage that would contain the members of their company along with their information relative to their position. I also had to use Jest to run tests on the various functions found in each employee class. I had a lot of fun building this project and I hope you enjoy."
            }
          />

          <Project
            liveApp={"https://wron1.github.io/weather-dashboard/"}
            githubApp={"https://github.com/wron1/weather-dashboard"}
            title={"Weather Dashboard"}
            image={`url(${process.env.PUBLIC_URL + "/images/weather.PNG"})`}
            classy={"small-work"}
            info={
              "The purpose of this project was to create a webpage that pulls from a weather api to display the current weather as well as the current five day forecast for the coming week. The searched cities you enter will be saved locally and displayed underneath the search bar for quick access. This project was a good challenge and I enjoyed the process a lot. Thank you for checking it out and I hope you enjoy."
            }
          />

          <Project
            liveApp={"https://wron1.github.io/code-quiz/"}
            githubApp={"https://github.com/wron1/code-quiz"}
            title={"Code Quiz"}
            image={`url(${process.env.PUBLIC_URL + "/images/quiz.PNG"})`}
            classy={"small-work"}
            info={
              "The purpose of this project was to create a timed quiz along with a highscore functionality. This project was especially tricky, however I must say it was very fun to work on. The functions include multiple questions that cycle through and a timer which has 60 seconds on it. The end conditions are either the time running out or you answering all the questions. The more accurate your answers the more points you get per correct answer. There is also a speed component making it so that you need a balance of speed and accuracy to get the highest score possible. Scores are stored locally and are found in the highscores page located seperately in its own html."
            }
          />

          <Project
            liveApp={"https://wron1.github.io/work-day-scheduler/"}
            githubApp={"https://github.com/wron1/work-day-scheduler"}
            title={"Work Day Scheduler"}
            image={`url(${process.env.PUBLIC_URL + "/images/scheduler.PNG"})`}
            classy={"small-work"}
            info={
              "For this project I had to take a some pre-existing html and css and create a daily planner for use during typical business hours. The time block that correlates with the current hour is displayed as red and the future hours are displayed in green while the hours that have already passed are displayed in grey. Each time slot has a save button which allows you to save the text written for that current day. This way when you re-load you can keep your to-dos for another day."
            }
          />
        </section>
      </section>
    </section>
  );
}

export default LargeContainer;
