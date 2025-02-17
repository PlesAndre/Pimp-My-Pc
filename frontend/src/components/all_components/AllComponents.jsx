import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AllComponents() {
  const [components, setComponents] = useState([]);

  const fetchComponents = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/components");
      const data = await response.json();
      setComponents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComponents();
  }, []);

  return (
    <Container className="mt-5">
      <h2>Tutti i Componenti</h2>
      <Row>
        {components.map((component) => (
          <Col md={4} key={component.name} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={component.image}
                alt={component.name}
              />
              <Card.Body>
                <Card.Title>{component.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {component.brand}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Description:</strong> {component.description}
                </Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${component.price}
                </Card.Text>
                <Card.Text>
                  <strong>Ratings:</strong> {component.ratings} / 5
                </Card.Text>
                <Card.Text>
                  <strong>Stock:</strong> {component.stock} items available
                </Card.Text>
                <Button
                  as={Link}
                  to={`/components/${component._id}`}
                  variant="primary"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
