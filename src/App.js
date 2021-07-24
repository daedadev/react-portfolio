import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import LargeContainer from "./components/LargeContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Banner />
        <LargeContainer />
      </Wrapper>
    </Router>
  );
}

export default App;
