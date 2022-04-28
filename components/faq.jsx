import React, { useState } from "react";
import { Collapse, Card, Container, Row, Col } from "react-bootstrap";

const Faq = ({ Questions }) => {
  const [toggleQuestion, setToggleQuestion] = useState(0);

  return (
    <>
      <Container>
        <h1 className="display-3 mb-6 text-white font-weight-normal text-center">
          Frequently Asked Questions <i className="far fa-question-circle"></i>
        </h1>
        <Row>
          {Questions.map((FAQ, index) => {
            return (
              <Col key={index} className="my-3" lg="6" md="12">
                <Card style={{ fontSize: "20px" }} className="shadow-lg">
                  <Card.Header
                    onClick={() =>
                      toggleQuestion !== 0
                        ? setToggleQuestion(0)
                        : setToggleQuestion(index + 1)
                    }
                    aria-controls={index}
                    aria-expanded={toggleQuestion === index + 1 ? true : false}
                    className="has-no-border"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="font-weight-bolder cursor-pointer">
                      {toggleQuestion === index + 1 ? (
                        <i className="fas fa-caret-down"></i>
                      ) : (
                        <i className="fas fa-caret-right"></i>
                      )}{" "}
                      {FAQ.question}
                    </span>
                  </Card.Header>
                  <Collapse in={toggleQuestion === index + 1 ? true : false}>
                    <Card.Body id={index}>{FAQ.answer}</Card.Body>
                  </Collapse>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Faq;
