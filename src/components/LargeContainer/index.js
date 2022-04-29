import React, { useEffect, useState } from "react";
import "./style.css";
import AboutMe from "../AboutMe";
import Project from "../Project";
import ProjectInfo from "../ProjectInfo";
import Aos from "aos";
import "aos/dist/aos.css";

function LargeContainer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [liveApp, setLiveApp] = useState();
  const [githubApp, setGithubApp] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [info, setInfo] = useState();
  const [challenges, setChallenges] = useState();
  const [triumphs, setTriumphs] = useState();
  const [dependancies, setDependancies] = useState([]);
  const [video, setVideo] = useState();
  const [showProject, setShowProject] = useState("display-off");

  function setModal(
    liveApp,
    githubApp,
    title,
    image,
    info,
    challenges,
    triumphs,
    dependancies,
    video
  ) {
    window.location.href = "/#project-info";

    setLiveApp(liveApp);
    setGithubApp(githubApp);
    setTitle(title);
    setImage(image);
    setInfo(info);
    setChallenges(challenges);
    setTriumphs(triumphs);
    setDependancies(dependancies);
    setVideo(video);

    setShowProject("large-cell");
  }

  function toggleModal(theClass) {
    setShowProject(theClass);
  }

  return (
    <section id="aboutme-section" className="large-container">
      <AboutMe />
      <section id="work">
        <section id="project-title">
          <div id="work-section"></div>
          <h1 data-aos="zoom-out" data-aos-once="true">
            Projects
          </h1>
        </section>
        {showProject === "large-cell" && (
          <div
            className="close-large-modal"
            onClick={() => toggleModal("display-off")}
          ></div>
        )}

        <section
          className="projects-main"
          data-aos="fade-left"
          data-aos-once="true"
        >
          <Project
            liveApp={"https://react-shop-cms.herokuapp.com/"}
            githubApp={"https://github.com/daedadev/Shop-CMS"}
            title={"Shop Management System"}
            image={`url(${process.env.PUBLIC_URL + "/images/HomePage.PNG"})`}
            classy={"large-work"}
            info={`This project serves as a backend to a small shop. This program being software to manage content you can view and edit your inventory, view users from your store, see orders and mark them as fulfilled, and see different helpful statistics to visualize your websites growth.`}
            challenges={
              "The biggest challenge was documenting and finally thinking like an engineer. Creating software is difficult, but creating useable software has been a nightmare."
            }
            triumphs={
              "Creating a scalable API coupled with a functional UI was my biggest achievement during this project. Documentation was also a big part of this project. I documented as much as I could when I could. The github has all of my final thoughts while my blog has my preliminary thought process."
            }
            dependancies={[
              "Javascript",
              "React",
              "Node.js",
              "MySQL",
              "TailwindCSS",
            ]}
            icons={[
              {
                src: "https://img.icons8.com/officel/80/000000/react.png",
                alt: "React logo",
              },
              {
                src: "https://img.icons8.com/color/48/000000/mysql-logo.png",
                alt: "MySQL logo",
              },
              { src: "/images/tailwind-css.png", alt: "TailwindCSS logo" },
              {
                src: "https://img.icons8.com/ios/50/000000/javascript--v1.png",
                alt: "Javascript Logo",
              },
            ]}
            video={"https://youtu.be/HsP0xBh89V8"}
            openModal={setModal}
          />
          <Project
            liveApp={"https://upperlevelkicks.net/"}
            githubApp={"https://github.com/daedadev/upper-level-kicks"}
            title={"Upper Level Kicks"}
            image={`url(${process.env.PUBLIC_URL + "/images/UpperLevel3.PNG"})`}
            classy={"small-work"}
            info={`This is a personal pet project of mine that utilizes the Sneaks-API which contains data that has been scraped from StockX/GOAT/FlightClub into one single database. As a sneaker enthusiast myself seeing this data I challenged myself to make a website that mimicked StockX but housed a variety of prices. A hub of resell websites provided by that API.`}
            challenges={
              "Main difficulty with this project was parsing the data and mapping it in a way that is presentable and modular."
            }
            triumphs={
              "Being able to create a webpage with similar conventions as StockX is a huge accomplishment. The preloading and inline search results really mimic their websites feel."
            }
            dependancies={[
              "Javascript",
              "React",
              "HTML",
              "Firebase",
              "MySQL",
              "Sneaks-API",
            ]}
            icons={[
              {
                src: "https://img.icons8.com/officel/80/000000/react.png",
                alt: "React logo",
              },
              {
                src: "https://img.icons8.com/color/48/000000/mysql-logo.png",
                alt: "MySQL logo",
              },
              {
                src: "https://img.icons8.com/color/48/000000/firebase.png",
                alt: "Firebase logo",
              },
              {
                src: "https://img.icons8.com/ios/50/000000/javascript--v1.png",
                alt: "Javascript Logo",
              },
            ]}
            video={"https://youtu.be/qqO8OebHBeE"}
            openModal={setModal}
          />
          <Project
            liveApp={"https://daedadev-blog.vercel.app/"}
            githubApp={"https://github.com/daedadev/Daedadev-Blog"}
            title={"Personal Blog"}
            image={`url(${process.env.PUBLIC_URL + "/images/Blog.PNG"})`}
            classy={"small-work"}
            info={
              "This is a personal blog where I post about current projects as well as try and discuss anything I come across that I feel I could shed some light on in the tech world."
            }
            challenges={
              "Honestly at this point in my development journey the styling more than anything was a big challenge. Having to knock my brain against TailwindCSS was a big hurdle. Also finding documentation on highlighting markdown was a huge challenge."
            }
            triumphs={
              "I was able to create a statically generated web page with Next.js and TailwindCSS. I learned a lot about SEO and how much server-side rendering is necessary. Without Next it wouldnt be possible."
            }
            dependancies={[
              "Javascript",
              "Next.js",
              "TailwindCSS",
              "Vercel",
              "HTML",
              "Gray-Matter",
              "Highlight.js",
            ]}
            icons={[
              {
                src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
                alt: "Next js logo",
              },
              { src: "/images/tailwind-css.png", alt: "TailwindCSS logo" },
              {
                src: "https://img.icons8.com/ios/50/000000/javascript--v1.png",
                alt: "Javascript Logo",
              },
            ]}
            video={"https://youtu.be/EM7jGBTUW_M"}
            openModal={setModal}
          />
          <Project
            liveApp={"https://reactappbooksearch.herokuapp.com/"}
            githubApp={"https://github.com/daedadev/google-book-search"}
            title={"Google Book Search"}
            image={`url(${process.env.PUBLIC_URL + "/images/googlebooks.PNG"})`}
            classy={"small-work"}
            info={`This project uses the Google Book API to search and view books. With a React front-end and a MySQL back-end you can quickly and easily view, save, and delete books. Please allow for a 10 to 15 second startup for the liveapp due to heroku deployment`}
            challenges={
              "The hardest part about this project was definitely parsing the data into componential pieces that could be easily re-used. Dealing with the modal was also a bit of a challenge but once it was working plugging in the info was a breeze."
            }
            triumphs={
              "Completed the ability to view, save, and delete books with a react front-end and a MySQL back-end. Deploying this app to heroku was a big success for me."
            }
            dependancies={["Javascript", "React", "HTML", "Sequelize", "MySQL"]}
            icons={[
              {
                src: "https://img.icons8.com/officel/80/000000/react.png",
                alt: "React logo",
              },
              {
                src: "https://img.icons8.com/color/48/000000/mysql-logo.png",
                alt: "MySQL logo",
              },
              {
                src: "https://img.icons8.com/ios/50/000000/javascript--v1.png",
                alt: "Javascript Logo",
              },
            ]}
            video={"https://youtu.be/x_acOZ1RJS0"}
            openModal={setModal}
          />

          <Project
            liveApp={"https://wron1.github.io/pokemon-tracker/"}
            githubApp={"https://github.com/daedadev/pokemon-tracker"}
            title={"Pokemon Card Tracker"}
            image={`url(${process.env.PUBLIC_URL + "/images/pokemon.PNG"})`}
            classy={"small-work"}
            info={
              "This project was designed to help users search the pokemon card database using specific search criteria based on the pokemons generation, type, and name. After searching, users will be able to compare the prices of different cards across several marketplaces and save their preferred cards to return to later. This project was challenging, but interesting and gave us an opportunity to better understand APIs and their deployment, as well as hone our skills in HTML and CSS."
            }
            challenges={
              "This was my first time working with API's on such a large scale and handling the huge amounts of data that come with pokemon cards was a bit overwheling. Also I was the sole backend developer on this project."
            }
            triumphs={
              "I successfully allowed for sorting pokemon, saving pokemon, and viewing all with local storage saved in the browser. I became extremely comfortable with consuming APIs after this project."
            }
            dependancies={["Javascript", "Local Storage", "TCG API", "HTML"]}
            icons={[
              {
                src: "https://img.icons8.com/color/48/000000/html-5--v1.png",
                alt: "HTML logo",
              },
              {
                src: "https://img.icons8.com/ios/50/000000/javascript--v1.png",
                alt: "Javascript Logo",
              },
            ]}
            video={"https://youtu.be/IgVzbme_6zc"}
            openModal={setModal}
          />

          {/* <Project
            liveApp={
              "https://drive.google.com/file/d/1P3UFwL1Xowo-_Ounieit_n6NMbY11HPZ/view"
            }
            githubApp={"https://github.com/wron1/employee-tracker"}
            title={"Employee Tracker"}
            image={`url(${
              process.env.PUBLIC_URL + "/images/employeetracker.PNG"
            })`}
            classy={"small-work"}
            info={
              "This project was an extremely difficult task in which I had to utilize mysql/sequelize and inquirer along with express and node to create a command line employee tracker application. The biggest challenge had to be getting the table to function properly and even still there are some hiccups with updating it."
            }
            challenges={
              "Working solely in the command prompt to create a program was a decent hurdle as up to this point I had only worked with basic html and css. Making the table function correctly and update was also a big challenge."
            }
            triumphs={
              "This project allowed me to get my head out of the webpage and focus more on the technical workings of javascript and how it interacts with a website. Working on a pure back-end application helped me strengthen my programming skills and helped me be as comfortable if not more than in the front-end."
            }
            dependancies={["Javascript", "MySQL", "Sequelize", "HTML"]}
            video={"https://youtu.be/nwrqRrjI7Pc"}
            openModal={setModal}
          /> */}

          {/* <Project
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
            video={"https://youtu.be/zV4plFiY0eU"}
            openModal={setModal}
          /> */}

          {/* <Project
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
            video={"https://youtu.be/C9ObVO5OhEI"}
            openModal={setModal}
          /> */}
        </section>
        <ProjectInfo
          liveApp={liveApp}
          githubApp={githubApp}
          title={title}
          image={image}
          info={info}
          challenges={challenges}
          triumphs={triumphs}
          dependancies={dependancies}
          video={video}
          showProject={showProject}
          toggleModal={toggleModal}
        />
      </section>
    </section>
  );
}

export default LargeContainer;
