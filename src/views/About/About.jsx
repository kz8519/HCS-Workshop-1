import React from "react";
import "./About.css";
import CutePic from "../../assets/react.png";
import { Button } from "reactstrap";
// import Button from 'react-bootstrap/Button';

function ButtonItem(props) {
  return (
    <div
    className="intro-button">
      <Button 
        onClick={() => {
          // props.setActiveTitle(props.title);
          props.setActiveDescription(props.description);
        }}
        variant="primary"
        size="lg" active
      >Click for a fun fact!</Button>{' '}
    </div>
  );
}

export default function AboutScreen() {
  // const [activeTitle, setActiveTitle] = React.useState("");
  const [activeDescription, setActiveDescription] = React.useState("");

  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          Hi! I'm Kathy, a first-year student from California. I'm interested in studying applied math or computer science.
        </div>
        <div className="intro-button">
          <ButtonItem 
            // title="Title" 
            // setActiveTitle={setActiveTitle}
            description="My favorite food is sushi."
            setActiveDescription={setActiveDescription}
          ></ButtonItem>
        </div>
        <div className="intro-background">
          {/* <h1>{activeTitle}</h1> */}
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
