import React from "react";
import { Container } from "react-bootstrap";
import { WorkBlockBuilder } from "./workblock";

const current = [
  {
    title: "ViBrush",
    date: "Feb 2022 - Present",
    description:
      "Awarded NYU prototyping fund grant. Trying to build the world's first electronic climbing brush!",
    links: [],
  },
  {
    title: "Tech@NYU Mentorship Database",
    date: "Aug 2022 - Present",
    description:
      "Building a platform to connect students to mentors for coffee chats.",
    links: [],
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
    title: "Tech@NYU Official Website",
    date: "August 2021 - Present",
    description: "Official tech@nyu site",
    links: [
      { t: "Website", l: "https://techatnyu.org" },
      { t: "Github", l: " https://github.com/TechAtNYU/techatnyu.org" },
    ],
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
  {
    title: "Google Form Bot",
    date: "December 2020",
    description:
      "Used this to automatically book slots for rock climbing during Covid Restrictions.",
    links: [
      { t: "Github", l: "https://github.com/anthonysukotjo/google-form-bot" },
    ],
  },
  {
    title: "Snake",
    date: "November 2020 - December 2020",
    description: "Snake game in Java",
    links: [
      {
        t: "Github",
        l: "https://github.com/anthonysukotjo/snake",
      },
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
