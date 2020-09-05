import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi there</h1>
        <Weather city="New York" />
      </header>
    </div>
  );
}

export default App;
