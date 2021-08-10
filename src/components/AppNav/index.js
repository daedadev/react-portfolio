import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import ProjectPage from "../../pages/ProjectPage";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Footer from "../Footer";
import Resume from "../../pages/Resume";
import Banner from "../Banner";

function AppNav() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Header />
        <Banner />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/project">
            <ProjectPage />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default AppNav;
