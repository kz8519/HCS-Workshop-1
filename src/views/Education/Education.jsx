import React from "react";
import "./Education.css";

function TimeLineItem(props) {
  return (
    <div
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
      className="timeline-item">
      <h1>{props.title}</h1>
    </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Click on a school on the left to read more.");
  const [activeDescription, setActiveDescription] = React.useState("");

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Harvard University" 
            setActiveTitle={setActiveTitle}
            description="I'm currently a first-year student at Harvard College. I haven't declared a concentration yet, but am interested in studying computer science or math."
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
          <TimeLineItem 
            title="Amador Valley"
            setActiveTitle={setActiveTitle}
            description="I attended Amador Valley High School from 2016 to 2020."
            setActiveDescription={setActiveDescription}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
