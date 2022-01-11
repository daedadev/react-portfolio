import React from "react";
import "./style.css";
import AboutMe from "../AboutMe";
import Project from "../Project";

function LargeContainer() {
  return (
    <section className="large-container">
      <section id="work" className="left-and-right">
        <section className="left">
          <h1>Projects</h1>
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
            challenges={
              "Quality, scale, and teamwork were the hardest parts for this project. This being the final project in my bootcamp the task of making software using everything we knew was truly a daunting task."
            }
            triumphs={
              "Finished project with plenty of scalability. Proper front end counselor login and backend Admin login with their own security measures and database management. I personally setup the entire backend for this project, did model managment and relations, and utilized JSON webtokens to properly send data between webpages."
            }
            dependancies={[
              "Javascript",
              "React",
              "HTML",
              "Nodemailer",
              "JSON Webtoken",
            ]}
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
            challenges={""}
            triumphs={""}
            dependancies={[""]}
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
            challenges={""}
            triumphs={""}
            dependancies={[""]}
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
            challenges={""}
            triumphs={""}
            dependancies={[""]}
          />

          <Project
            liveApp={"https://rocky-river-62832.herokuapp.com/dealer"}
            githubApp={"https://github.com/JustinBrubaker7/Dealership"}
            title={"Dealership"}
            image={`url(${process.env.PUBLIC_URL + "/images/dealership.PNG"})`}
            classy={"small-work"}
            info={
              "This group collaborative project made for a decent challenge tackling a very interesting concept. A dealership webpage with a functioning backend for the dealership owner as well as a functioning frontend for customers which serves that dealer backend. Justin handled the backend dealership portion and Daniel handled the frontend customer portion. The collaborative effort was welcome and very much needed for such a large project. For only having 2 weeks of preparation the execution was more than successful and helped our team grow immensely."
            }
            challenges={""}
            triumphs={""}
            dependancies={[""]}
          />
        </section>
      </section>
      <AboutMe />
    </section>
  );
}

export default LargeContainer;
