import React from "react";
import "./style.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "../../pages/MainPage";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Footer } from "../Footer";
import ResumePage from "../../pages/ResumePage";

export function AppNav() {
  return (
    <Router baseline='/'>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/aboutme-section">
            <MainPage />
          </Route>
          <Route exact path="/work-section">
            <MainPage />
          </Route>
          <Route exact path="/footer">
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