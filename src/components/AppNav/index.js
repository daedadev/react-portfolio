import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Footer from "../Footer";
import Resume from "../../pages/Resume";
import Banner from "../Banner";

function AppNav() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Banner />
        <Switch>
          <Route exact path="/react-portfolio">
            <MainPage />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default AppNav;
