import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    TBN24: {
      jobTitle: "Software Engineer Intern @",
      duration: "June 2021 - August 2021",
      desc: [
        "Insert description",
        "Insert description",
        "Insert description"   
      ]
    },
    "Selective Corporate Internship Program": {
      jobTitle: "Web Developer Intern @",
      duration: "JUL 2019 - SEPT 2019",
      desc: [
        "Revamp SCIP’s current website to ensure users were able to navigate and use the site with accessibility feature by using HTML and CSS.",
        "Developed a new event page for students to sign up for any upcoming events hosted by SCIP decreasing dependency on the third-party event management application.",
        "Developed an interactive gallery page for the users to learn more about SCIP.",
        "Worked in an Agile environment using Scrum and Canva and Git for VSC."

      ]
    },
    "Total Cable": {
      jobTitle: "Software Developer Intern @",
      duration: "JUN 2017 - JUL 2019",
      desc: [
          "Developed in-house Customer Retail Management (CRM) system for inventory and product management using Django.",
          "Integrated QuickBook API with the CRM for ensuring a smooth transition from the old system.",
          "Developed REST API for the Application enabling developers to use the CRM for multitude usage catering their individual needs.",
          "Used JIRA for ticket management and performed A/B Testing among the employers to gather statistics of the usage and make changes.",
          "Collaborated with the team of engineers to fulfill the acceptance criteria ensuring deliverable on time."
      ]
    },
    "City College": {
      jobTitle: "College Assistant @",
      duration: "AUG 2017 - JUL 2019",
      desc: [
          "Cataloged and processed new materials including books, audiovisual materials and government documents.",
          "Assisted with the checking in and checking out of books in a library serving all college students.",
          "Updated catalog records in ALEPH and local holdings records in OCLC for serials."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function(descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
