import React from "react";
import "../styles/About.css";
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
        I am currently studying <b>Computational Mathematics</b> at{" "}
        <b> Rochester Insititute Of Technology </b>, with a minor in <b>Computer Science</b>
        I am also currently interning at {" "}
        <a href="https://www.tbn24.com">TBN24</a> as an{" "}
        <b>Software Engineer</b>.
      </p>
    );
    const two = (
      <p>
        I'm into <b>Full-Stack Development</b>, <b>Product Manager</b> and{" "}
        <b>frontend development</b>. Insert more information here 
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:sb4518@rit.edu">
          sb4518@rit.edu
        </a>{" "}
        and let's have a chat
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Python",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    //var image = require("./assets/me.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title"> About Me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Here are some technologies I have been working with:"}
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
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;