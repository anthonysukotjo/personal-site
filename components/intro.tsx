import React from "react";
import Row from "react-bootstrap/Row";
import { Col, Container } from "react-bootstrap";

const Intro = () => {
  return (
    <Container>
      {/*className="d-flex justify-content-between" style={{}}*/}
      <Row>
        <Col>
          <h1>Hey! I&apos;m Anthony!</h1>
          <h5 style={{ color: "grey" }}>About me</h5>
          <div>
            <h3> 🇸🇬 Singaporean </h3>
            <h3>🗽 Studying CS at NYU </h3>
            <h3>🧗‍♂️ Climber </h3>
            <h3>🚀 Building the tech community at NYU with Tech@NYU </h3>
            <h3>🏛 Using data science to research local city politics </h3>
          </div>
        </Col>
        <Col
          className={"text-end"}
          style={{
            maxWidth: "350px",
          }}
        >
          <img
            style={{
              borderRadius: "35px",
              width: "auto",
              maxWidth: "100%",
              height: "auto",
              position: "relative",
            }}
            src={"/profile.jpeg"}
            alt={"Profile Picture"}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Intro;
