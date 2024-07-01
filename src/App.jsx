import React from "react";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

const apiUrl = "https://official-joke-api.appspot.com/jokes/random";

function App() {
  return (
    <div>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
