import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [postTitle, setPostTitle] = useState("");

  return (
    <div>
      Typescript Crash Course Refresher
      <h1>{postTitle}</h1>
    </div>
  );
}

export default App;
