import React from "react";
import "../styles/Projects.css";
import FadeInSection from "./FadeInSection";
//import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import FolderSpecialOutlinedIcon from '@material-ui/icons/FolderSpecialOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

class Projects extends React.Component {
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
    const project = {
        "Blackjack": {
            desc:
              "A simple blackjack game as a first project.",
            techStack: "C++",
            link: "https://github.com/sb4518/black_jack",
            open:""
      }
      

    };

    return (
      <div id="project">
        <div className="section-header ">
          <span className="section-title"> Projects</span>
        </div>

        <div className="project-container">
          <ul className="project-grid">
            {Object.keys(project).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="project-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderSpecialOutlinedIcon
                        style={{ fontSize: 35 }}
                      ></FolderSpecialOutlinedIcon>
                    </div>
                    <span className="external-links">
                      <a className="pdf-icon" target="_blank" rel="noopener noreferrer" href={project[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 25,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {project[key]["open"] && (
                        <a className="open-icon" target="_blank" rel="noopener noreferrer" href={project[key]["open"]}>
                          <OpenInNewIcon
                            style={{
                              fontSize: 20,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInNewIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{project[key]["desc"]}</div>
                  <div className="card-tech">{project[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;