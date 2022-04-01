import React from "react";
import Header from "../src/components/Header/Header.js";
import CardLocation from "../src/components/CardLocation/CardLocation.js";

import "./app.css";

function App() {
  return (
    <div className="app">
      <div className="header-container">
        <Header />
      </div>
      <div className="Location__list-container">
        <CardLocation />
      </div>
    </div>
  );
}

export default App;
