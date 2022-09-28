import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Footer } from "../Footer";
import ResumePage from "../../pages/ResumePage";

export function AppNav() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/resume">
            <ResumePage />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  );
}