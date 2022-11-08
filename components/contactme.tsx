import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Col,
  FloatingLabel,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import querystring from "querystring";

const submitFeedbackForm = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const body = {
    "entry.1606031235": name,
    "entry.1739989547": email,
    "entry.1014074830": subject,
    "entry.183698369": message,
  };
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  try {
    const response = await fetch("/api/contact", {
      body: querystring.stringify(body),
      headers: headers,
      method: "POST",
    });
    return response.status === 200;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const style = {
  marginBottom: "10px",
  color: "Grey",
};
export default function ContactMe() {
  const { register, handleSubmit } = useForm();
  const [formSent, setFormSent] = useState(false);
  const onSubmit = async (data: { [x: string]: string }) => {
    const status = await submitFeedbackForm(
      data.name,
      data.email,
      data.subject,
      data.message
    );
    if (!status)
      alert(
        "There seems to be an error submitting your message. Please try again!"
      );
    else setFormSent(true);
  };

  return (
    <Container>
      <h1>Lets get in touch!</h1>
      <h5>
        You can email me at{" "}
        <a href={"mailto:aas10023@nyu.edu"}>aas10023@nyu.edu</a> or fill up the
        form below!
      </h5>
      {!formSent ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="g-2" style={style}>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Name">
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Email address"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-2" style={style}>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Subject">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="g-2" style={style}>
            <FloatingLabel
              controlId="form-msg"
              label="Message"
              className="contact-item_form"
            >
              <Form.Control
                as="textarea"
                style={{ height: "300px" }}
                placeholder="Leave a Message here"
                {...register("message")}
                required
              />
            </FloatingLabel>
          </Row>
          <Row
            className="g-2 align-content-center justify-content-center"
            style={style}
          >
            <Button
              variant="secondary"
              type="submit"
              style={{ width: "500px" }}
            >
              Submit
            </Button>
          </Row>
        </Form>
      ) : (
        <h5>
          {" "}
          I have received your message and will get back to you as soon as
          possible!
        </h5>
      )}
    </Container>
  );
}
