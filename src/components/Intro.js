import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailIcon from '@material-ui/icons/Email';
import FadeInSection from "./FadeInSection";

//import ReactRoundedImage from "react-rounded-image";
//import pic from "../picture/emoji.png";
import RoundedImage from "./RoundImage";

//import { Avatar } from "@material-ui/core";

//Change the intro subtitle
//Fix the position of the email porition 
class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
          <div id="sam-emoji">
          <RoundedImage></RoundedImage>
        </div>
        );
          
        <Typist avgTypingDelay={180} cursor={{ hideWhenDone: true }}>
          <span className="intro-title">
            {"Hi, "}
            <span className="intro-name">{"Samuel"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
             {/* /*cursor={{ hideWhenDone: true }}> */}
                <span className="intro-subtitle">
                    {"Always learning!"}
                </span>
           
          {/* <div className="intro-subtitle">Creating, Innovating one step at a time.</div>   */}
          <div className="intro-desc">
            
          </div>
          <a
            href="mailto:sb4518@rit.edu"
            className="intro-contact"
          >
            <EmailIcon></EmailIcon>
            {"  Let's Chat!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;