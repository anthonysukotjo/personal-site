import styles from "../styles/Home.module.css";
import Intro from "../components/intro";
import ContactMe from "../components/contactme";
import Projects from "../components/projects";
import Experience from "../components/work";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Intro />
      <h1>Experience</h1>
      <h1>Featured Projects</h1>
      <div id="Resume" />
      <Container>
        <h1>Contact me below for my resume!</h1>
      </Container>
      <div id="Contact" />
      <ContactMe />
    </div>
  );
}
