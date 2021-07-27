import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Footer from "../Footer";
import Resume from "../../pages/Resume";

function AppNav() {
  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </Wrapper>
  );
}

export default AppNav;
