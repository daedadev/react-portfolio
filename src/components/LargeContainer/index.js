import React from "react";
import "./style.css";
import AboutMe from "../AboutMe";
import Footer from "../Footer";
import MiddleContent from "../MiddleContent";

function LargeContainer() {
  return (
    <section class="large-container">
      <AboutMe />
      <MiddleContent />
      <Footer />
    </section>
  );
}

export default LargeContainer;
