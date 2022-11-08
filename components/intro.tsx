import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import { Col, Container } from "react-bootstrap";
const Intro = () => {
  return (
    <Container>
      {/*className="d-flex justify-content-between" style={{}}*/}
      <Row>
        <Col>
          <h1>Hey! I&apos;m Anthony!</h1>
          <h5 style={{ color: "grey" }}>I&apos;m currently...</h5>
          <div>
            <h3>Studying CS at NYU 🗽</h3>
            <h3>Building the tech community at NYU with Tech@NYU 🚀</h3>
            <h3>Using data science to research local city politics🏛 </h3>
          </div>
        </Col>
        <Col className={"text-end"}>
          <Image
            width="350"
            height="350"
            style={{ borderRadius: "35px", width: "350px", height: "auto" }}
            src={"/profile.jpeg"}
            alt={"Profile Picture"}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Intro;
