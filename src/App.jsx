import React, { useState } from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <div>
      <h1>Every Day Joke</h1>
      {showComponent && (
        <div className="container">
          <FunctionalComponent />
          <ClassComponent />
        </div>
      )}
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Hide Components" : "Show Components"}
      </button>
    </div>
  );
}

export default App;
