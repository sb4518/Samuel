import React from "react";
import { Sidenav } from "rsuite";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";

/*To open a new tab after clicking a link: 
add target ="_blank" rel="noreferrer noopener" 
After the reference link 
*/

const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component {
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
    const { expanded } = this.state;

    const links = [
      <a href = "/">/Home</a>,
      <a href = "#about">/About</a>,
      <a href = "#experience">/Experience</a>,
      <a href = "#project">/Projects</a>,
      <a href = "#certifications">/Certification</a>
    ];

    return (
      <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <div>{link}</div>
                  </FadeInSection>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}
        <div className="sidebar-logos" href="/">
          <a href="mailto:sb4518@rit.edu" aria-label = "Email">
            <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
          </a>
          <a href="https://github.com/sb4518" aria-label = "Github" target ="_blank" rel="noreferrer noopener">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/samuelbaro/" aria-label = "LinkedIn" target ="_blank" rel="noreferrer noopener">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;
