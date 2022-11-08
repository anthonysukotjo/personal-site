import React, { FunctionComponent } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { WorkBlockBuilder } from "./workblock";

const current = [
  {
    title: "ViBrush",
    date: "Feb 2022",
    description:
      "Awarded NYU prototyping fund grant. Trying to build the world's first electronic climbing brush!",
    links: [],
  },
  {
    title: "A1b3rt - NYU Course Search",
    date: "Feb 2021 - Present",
    description:
      "Website for NYU students to search and plan courses more efficiently than the official NYU Course portal.",
    links: [
      { t: "Website", l: "https://notalbert.netlify.com" },
      { t: "Github", l: "https://github.com/anthonysukotjo/notalbert" },
    ],
  },
];
const done = [
  {
    title: "Homie",
    date: "Feb 2022",
    description:
      "HackNYU 2022 Winner. A platform for students to find peers to walk home together from school.",
    links: [
      { t: "Website", l: "https://devpost.com/software/homie-pk4r2v" },
      { t: "Github", l: "https://github.com/anthonysukotjo/homie" },
    ],
  },
  {
    title: "WasteLess",
    date: "May 2020 - September 2021",
    description:
      "A waste data collection service using IoT and data analytics to get people to waste less. ",
    links: [
      { t: "Website", l: "https://wastelesssg.github.io" },
      { t: "Github", l: "https://www.github.com" },
    ],
  },
  {
    title: "Tutelage",
    date: "April 2020",
    description:
      "Hackathon Finalist. A platform for students to connect with volunteer tutors.",
    links: [
      { t: "Website", l: "https://devpost.com/software/tutelage" },
      {
        t: "Github",
        l: "https://github.com/anthonysukotjo/tutelage_student",
      },
    ],
  },
];

const Projects = () => {
  return (
    <Container>
      <h1>Projects</h1>
      <h2>Currently Building</h2>
      {WorkBlockBuilder(current)}
      <h2>Past Projects</h2>
      {WorkBlockBuilder(done)}
    </Container>
  );
};

export default Projects;
