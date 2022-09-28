import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppNav } from "./components/AppNav";

function App() {
  return (
    <Router>
      <AppNav />
    </Router>
  );
}

export default App;
