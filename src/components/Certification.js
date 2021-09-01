import React from "react";
import "../styles/Certification.css";
import FadeInSection from "./FadeInSection";
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Certification extends React.Component {
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
    const certification = {
        // "AWS Cloud Practioner Certification": {
        //     desc:
        //       "How to optimize your research efforts for your particular project and synthesize feedback into the team process",
        //     techStack: "Date Completed: Soon",
        //     link: " ",
        //     open: "https://www.linkedin.com/in/samuelbaro/"
        //   },
      "Software Development Life Cycle (SDLC)": {
        desc:
          "Life cycle ",
        techStack: "Date Completed: Jul 17, 2021",
        link: "https://drive.google.com/file/d/1WUtQJJMskDkaHXAPTS5Jp_lc_ZMcMneO/view?usp=sharing",
        open: "https://www.linkedin.com/in/samuelbaro/"
      },
      "Lean Six Sigma Foundation": {
        desc:
          "How to optimize your research efforts for your particular project and synthesize feedback into the team process",
        techStack: "Date Completed: Soon",
        link: " ",
        open: "https://www.linkedin.com/in/samuelbaro/"
      },
      "UX Research for Agile Teams": {
        desc:
          "How to optimize your research efforts for your particular project and synthesize feedback into the team process",
        techStack: "Date Completed: Aug 4, 2021",
        link: "https://drive.google.com/file/d/17u-UjRQNeOFljufj3hpGTnBf0tkelTnX/view?usp=sharing",
        open: "https://www.linkedin.com/in/samuelbaro/"
      },
      "Business Analytics Foundations: Descriptive, Exploratory, and Explanatory Analytics": {
        desc:
          "How to optimize your research efforts for your particular project and synthesize feedback into the team process",
        techStack: "Date Completed: Aug 12, 2021",
        link: "https://drive.google.com/file/d/1JGwe8Zg00h_KzlRURRm9ktZDGNASaty5/view?usp=sharing",
        open: "https://www.linkedin.com/in/samuelbaro/"
      }
      

    };

    return (
      <div id="certifications">
        <div className="section-header ">
          <span className="section-title"> Certifications</span>
        </div>

        <div className="certification-container">
          <ul className="certifications-grid">
            {Object.keys(certification).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="certifications-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <DescriptionRoundedIcon
                        style={{ fontSize: 35 }}
                      ></DescriptionRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="pdf-icon" target="_blank" rel="noopener noreferrer" href={certification[key]["link"]}>
                        <PictureAsPdfIcon
                          style={{
                            fontSize: 25,
                            color: "var(--lightest-slate)"
                          }}
                        ></PictureAsPdfIcon>
                      </a>
                      {certification[key]["open"] && (
                        <a className="open-icon" target="_blank" rel="noopener noreferrer" href={certification[key]["open"]}>
                          <LinkedInIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></LinkedInIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{certification[key]["desc"]}</div>
                  <div className ="card-date">{certification[key]["Completion"]}</div>
                  <div className="card-tech">{certification[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Certification;