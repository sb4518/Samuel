import React from "react";
import "../styles/About.css";
import head from "../picture/samuel.jpeg";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
    I am currently a senior studying <b>Computational Mathematics</b> at{" "}
    <b> Rochester Insititute Of Technology,</b> with a minor in <b>Computer Science. </b>
     I am also currently interning at {" "}
    <a href="https://www.tbn24.com">TBN24</a> as a{" "}
    <b>Software Engineer</b>.
      </p>
    );
    const two = (
      <p>
        I'm into <b>Full-Stack Development</b>, <b>Front-End Development</b> and{" "}
        <b>Project Manager</b>.
      </p>
      /* Insert more information */
    );
    // const three = (
    //   <p>
    //     <b>Want to chat?</b> Shoot me a message at{" "}
    //     <a href="mailto:sb4518@rit.edu">
    //       sb4518@rit.edu
    //     </a>{" "}
    //     and let's have a chat
    //   </p>
    // );
    const desc_items = [one, two];

    const tech_stack = [
      "Python",
      "Java",
      "C++",
      "C",
      "React.js",
      "HTML & CSS"
    ];

    //const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    //var imag = require("../components/picture/samuel.jpeg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title"> About Me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
                <img src = {head} alt= "Samuel.jpeg"/>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;