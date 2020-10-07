import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      All your amazing projects will go here!
      <Project 
        title="HCS-Workshop-1"
        link="https://google.com"
      ></Project>
    </div>
  );
}
