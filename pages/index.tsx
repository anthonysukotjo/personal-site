import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/navbar";
import Intro from "../components/intro";
import ContactMe from "../components/contactme";
import Projects from "../components/projects";
import Experience from "../components/work";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Intro />
      <div id="Experience" />
      <Experience />
      <div id="Projects" />
      <Projects />

      <div id="Resume" />
      <Container>
        <h1>Contact me below for my resume!</h1>
      </Container>
      <div id="Contact" />
      <ContactMe />
    </div>
  );
}
