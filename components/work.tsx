import React from "react";
import { Container } from "react-bootstrap";
import { WorkBlockBuilder } from "./workblock";

const workData = [
  {
    title: "Moy Research Group, NYU",
    date: "September 2022 – Present",
    role: "Research Assistant",
    description: `PoliSci Research 🤓
    Building novel dataset for local city politics.
    Measuring change in political ideology over time using sentiment analysis
    `,
    links: [],
  },
  {
    title: "Tech@NYU",
    date: "May 2022 – Present",
    role: "Co-President",
    description: "Building the tech community at NYU",
    links: [{ t: "Website", l: "https://techatnyu.org" }],
  },
  {
    title: "Check",
    date: "May 2022 – August 2022",
    role: "Software Engineering Intern",
    description: `Helped to make payroll software! 💸
    Improved visibility of internal metrics through new feature on internal tool using React. 
    Improved Django API performance by implementing bulk data query modules, solving N+1 query problems.
    Drafted, proposed and implemented RFC for product feature to unlock new business capability.\n`,
    links: [{ t: "Make paying people simple!", l: "https://www.checkhq.com" }],
  },
  {
    title: "TAMID",
    date: "February 2021 – December 2021",
    role: "Software Engineer and Project Manager",
    description: `Built products for Israeli startups.
    Built Electron app for Photography AI start-up to facilitate uploading of photos to cloud server.
    Led a team to build full-stack web application for legal-tech startup using NextJS Frontend and Flask Backend.
    `,
    links: [],
  },

  {
    title: "IRAS",
    date: "July 2021 – August 2021",
    role: "Software Engineer Intern",
    description:
      "Implemented new modules for consumer-facing chat bot using DialogFlow for the Singapore Tax Government Agency, interfacing with IRAS APIs.",
    links: [],
  },
  {
    title: "WasteLess",
    date: "July 2020 – July 2021",
    role: "Co-Founder/Tech Lead",
    description: `Helping Singapore Waste Less.
    Awarded a $10,000 fund from the Singapore Government to build a waste data collection service using IoT and data analytics.
    Oversaw product development from design to deployment.
      `,
    links: [
      { t: "Website", l: "https://wastelesssg.github.io" },
      { t: "Github", l: "https://www.github.com" },
      {
        t: "Featured on Rice Media",
        l:
          "https://www.ricemedia.co/current-affairs-features-the-rubbish-chute-is-the-reason-why-singapore-may-never-go-green/",
      },
      {
        t: "Featured on Ministry of Education",
        l: "https://www.schoolbag.edu.sg/story/the-rubbish-chute-gets-smart",
      },
    ],
  },
  {
    title: "Singapore Armed Forces Shooting Contingent",
    date: "Apr 2018 – Feb 2020",
    role: "Logistics Section Leader",
    description:
      "Pitched to senior commanders and led team to develop mobile app to digitize and optimize shooting statistics collection and analysis.",
    links: [],
  },
];

const Experience = () => {
  return (
    <Container>
      <h1>Experience</h1>
      {WorkBlockBuilder(workData)}
    </Container>
  );
};

export default Experience;
