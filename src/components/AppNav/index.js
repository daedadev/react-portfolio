import React from "react";
import "./style.css";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Footer from "../Footer";
import Resume from "../../pages/Resume";
import Banner from "../Banner";

function AppNav() {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Switch>
        <Route basename="react-portfolio" exact path="/">
          <MainPage />
        </Route>
        <Route basename="react-portfolio" exact path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </Wrapper>
  );
}

export default AppNav;
