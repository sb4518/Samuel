import React from "react";
import ReactRoundedImage from "react-rounded-image";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailIcon from '@material-ui/icons/Email';
import FadeInSection from "./FadeInSection";
import pic from "../picture/emoji.png";

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
          <div style={{display:"flex"}}>
          <ReactRoundedImage image={pic} roundedSize="10" imageWidth="150" imageHeight="150" />
      </div>
    );
        <Typist avgTypingDelay={120} cursor={{ hideWhenDone: true }}>
          <span className="intro-title">
            {"Hi, "}
            <span className="intro-name">{"Samuel"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
             <Typist startDelay={3500} avgTypingDelay={100}> 
             {/* /*cursor={{ hideWhenDone: true }}> */}
                <span className="intro-subtitle">
                    {"Always learning!"}
                </span>
            </Typist>
          {/* <div className="intro-subtitle">Creating, Innovating one step at a time.</div>   */}
          <div className="intro-desc">
               Chu Papi Chu Papi. 
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