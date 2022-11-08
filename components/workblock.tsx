import React, { FunctionComponent } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const style = {
  border: " 3px solid grey",
  borderRadius: "30px",
  padding: "20px",
  fontSize: "20px",
  marginBottom: "20px",
};
const margin = {
  marginBottom: "15px",
};

interface DemoLink {
  t: string;
  l: string;
};

const DemoLinkBuilders = (links: Array<DemoLink>) => {
  let elements: JSX.Element[] = [];
  for (let i = 0; i < links.length; i++) {
    elements.push(
      <a href={links[i].l} style={{ width: "max-content" }}>
        {" "}
        <Button variant={"outline-light"}> {links[i].t}</Button>
      </a>
    );
  }
  return elements;
};

const WorkBlock: FunctionComponent<{
  title: string;
  date: string;
  description: string;
  links: Array<DemoLink>;
}> = (props) => {
  return (
    <Container style={style}>
      <Row className="d-flex justify-content-between" style={margin}>
        <Col>
          <strong>{props.title}</strong>
        </Col>
        <Col className={"text-end"}>{props.date}</Col>
      </Row>
      <Row style={margin}>
        <Col>{props.description}</Col>
      </Row>
      <Row style={margin}>
        {DemoLinkBuilders(props.links)}
      </Row>
    </Container>
  );
};

interface ProjectData {
    title: string;
    date: string;
    description: string;
    links: Array<DemoLink>;
}

const WorkBlockBuilder = (data: Array<ProjectData>) => {
    let elements: JSX.Element[] = [];
    for (let i = 0; i < data.length; i++) {
        elements.push(
            <WorkBlock
                title={data[i].title}
                date={data[i].date}
                description={data[i].description}
                links={data[i].links}
            />
        );
    }
    return elements;
};
export { WorkBlock, type DemoLink, WorkBlockBuilder };
