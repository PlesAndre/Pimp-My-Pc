import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default function AllSetups() {
  const [setups, setSetups] = useState([]);

  const fetchSetups = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/setups");
      const data = await response.json();
      setSetups(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSetups();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-light">I NOSTRI SETUPS</h2>
      <Row>
        {setups.map((setup) => (
          <Col md={6} key={setup._id} className="mb-4">
            <Card className="setup-card shadow-lg border-0 rounded-3 d-flex flex-column">
              <Card.Img
                src={setup.image}
                alt={setup.name}
                className="card-image-setups rounded-3"
              />
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="text-center font-weight-bold text-dark mb-3">
                  {setup.name}
                </Card.Title>
                <Card.Text className="text-center text-light mb-3 price-container w-25">
                  ${setup.price}
                </Card.Text>
                <Card.Text className="mb-4">
                  <ul className="list-unstyled ps-3">
                    {setup.components.map((component, index) => (
                      <li key={index} className="text-muted">
                        <strong>{component.name}</strong>:{" "}
                        {component.description}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <div className="d-flex justify-content-center mt-auto">
                  <Button
                    as={Link}
                    to={`/setups/${setup._id}`}
                    variant="outline-primary"
                    className="w-100 py-2 rounded-3 shadow-sm"
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
