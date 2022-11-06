import React from "react";
import classes from "./App.module.css";
import Intents from "./components/Intents";
import SelectedIntents from "./components/SelectedIntents";

function App() {
  return (
    <div className={classes.App}>
     
      <SelectedIntents />
      <Intents />
    </div>
  );
}

export default App;
