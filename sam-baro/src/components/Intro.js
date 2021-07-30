import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailIcon from '@material-ui/icons/Email';
import FadeInSection from "./FadeInSection";

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
        <div id="sam-picture">
          {/* Insert picture here  */}
        </div>
        <Typist avgTypingDelay={180}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"Samuel"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Chu Papi.</div>
          <div className="intro-desc">
            Insert intro here 
          </div>
          <a
            href="mailto:sb4518@rit.edu"
            className="intro-contact"
          >
            <EmailIcon></EmailIcon>
            {"  " + "Say hello"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;