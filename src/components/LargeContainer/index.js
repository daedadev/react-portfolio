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
              "Sequelize",
              "MySQL",
              "Sessions",
              "TailwindCSS",
            ]}
            video={""}
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
            challenges={
              "This was my first time working with API's on such a large scale and handling the huge amounts of data that come with pokemon cards was a bit overwheling. Also I was the sole backend developer on this project."
            }
            triumphs={
              "We successfully allowed for sorting pokemon, saving pokemon, and viewing all with local storage saved in the browser. I personally became extremely comfortable with APIs after this project."
            }
            dependancies={["Javascript", "Local Storage", "TCG API", "HTML"]}
            video={""}
          />

          <Project
            liveApp={"https://desolate-spire-45416.herokuapp.com/"}
            githubApp={"https://github.com/wron1/tech-blog"}
            title={"Tech Blog"}
            image={`url(${process.env.PUBLIC_URL + "/images/techblog.PNG"})`}
            classy={"small-work"}
            info={
              "This project focuses on the use of sequelize and node.js to create a forum in which you can have an account, make posts and make comments on posts. There is a heavy focus on Handlebars as well as sequelize relationships. Handlebars was extremely helpful for keeping the styling fairly simple as well as simplifying the data transfer process between pages. This project was an extremely long one with many different problems to tackle. Even now there is some refinement to be added. The application is currently deployed live on Heroku utilizing JAWS_DB."
            }
            challenges={
              "Handling the login and logout functions at first was a bit of a challenge. Setting up the relational database was also a bit of a learning curve as well."
            }
            triumphs={
              "Successfully implemented logins and support of multiple users in a mock tech-blog application. Allows for commenting on other users posts and posting under your own username. Handlebars makes for easy use single page creation similar to react."
            }
            dependancies={[
              "Javascript",
              "Node",
              "Handlebars",
              "Sequelize",
              "Heroku",
            ]}
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
            challenges={
              "Working solely in the command prompt to create a program was a decent hurdle as up to this point I had only worked with basic html and css. Using Jest to test my functions was also something completely new and very handy."
            }
            triumphs={
              "Learning Jest was a big step for me and testing is actually quite fun. This project allowed me to get my head out of the webpage and focus more on the technical workings of javascript and how it interacts with a website."
            }
            dependancies={["Javascript", "Jest", "HTML"]}
            video={""}
          />

          <Project
            liveApp={"https://rocky-river-62832.herokuapp.com/dealer"}
            githubApp={"https://github.com/JustinBrubaker7/Dealership"}
            title={"Dealership"}
            image={`url(${process.env.PUBLIC_URL + "/images/dealership.PNG"})`}
            classy={"small-work"}
            info={
              "This group collaborative project made for a decent challenge tackling a very interesting concept. A dealership webpage with a functioning backend for the dealership owner as well as a functioning frontend for customers which serves that dealer backend. I handled the customer portion while my colleague handled the dealer portion. For only having 2 weeks of preparation the execution was more than successful and helped our team grow immensely."
            }
            challenges={
              "The main problem we faced when working on this car dealership marketplace was logging in for the backend dealers and the front end buyers. Making the frontend page look and feel responsive was also a daunting task. Also I was only given two weeks to complete this project."
            }
            triumphs={
              "I was able to completely tackle the backend, the relational database is great. We have users who can leave a review on the website after logging in and we also have dealer logins so they can add their inventory to allow for a proper website preview."
            }
            dependancies={[
              "Javascript",
              "Handlebars",
              "MySQL",
              "Heroku",
              "Sequelize",
              "Nodemailer",
              "HTML",
              "TailwindCSS",
            ]}
            video={""}
          />
        </section>
      </section>
      <AboutMe />
    </section>
  );
}

export default LargeContainer;
