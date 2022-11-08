import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href={"mailto:aas10023@nyu.edu"}>
        <h4>aas10023@nyu.edu</h4>
      </a>
      <a
        href={"https://www.linkedin.com/in/anthonysukotjo/"}
        className="social-icons"
      >
        <img src={"../Github.svg"} alt={"LinkedIn"} />
      </a>
      <a href={"https://github.com/anthonysukotjo"} className="social-icons">
        <img src={"../Linkedin.svg"} alt={"Github"} />
      </a>
    </footer>
  );
};
export default Footer;
