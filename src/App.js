import React from "react";
import "./App.css";
import NameForm from "./components/NameForm";
import FileInput from "./components/FileInput";

function App() {
  return (
    <div className="App">
      <NameForm className="Margin-Bottom-20" />
      <FileInput />
    </div>
  );
}

export default App;
