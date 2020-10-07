import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <Link 
      to={{ pathname: props.link }} 
      className="project-background" 
      target="_blank"
    >
      <div className="project-info">
        <h1>{props.title}</h1>
      </div>
    </Link>
    // <div className="screen-background">
    //   <Project
    //     title="Machine Learning"
    //     description="I made a machine learn"
    //     link="https://google.com"
    //   />
    //   <Project
    //     title="Personal Portfolio"
    //     description="This website!!"
    //     link="https://bing.com"
    //   />
    // </div>
  );
}
