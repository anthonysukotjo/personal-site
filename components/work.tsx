import React from "react";
import { Container } from "react-bootstrap";
import { WorkBlockBuilder } from "./workblock";

const workData = [
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

const Experience = () => {
  return (
    <Container>
      <h1>Experience</h1>
      {WorkBlockBuilder(workData)}
    </Container>
  );
};

export default Experience;
