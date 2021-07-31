import React from "react"; 
import About from "./components/About"; 
import Experience from "./components/Experience"
import Intro from "./components/Intro"
//import Project from "./components/Project"
import SidebarNav from "./components/SidebarNav"
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";
import Projects from "./components/Projects";

//import SidebarNav from "./components/SidebarNav";


function App() {
  return (
    <div className="App">
      <div id = "content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        
        </div>
        <SidebarNav />
        </div>
      
  );
}

export default App;
