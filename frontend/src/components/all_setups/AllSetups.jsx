import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <Row>
        {setups.map((setup) => (
          <Col md={4} key={setup.name} className="mb-4">
            <Card>
              <Card.Img variant="top" src={setup.image} alt={setup.name} />
              <Card.Body>
                <Card.Title>{setup.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {setup.category}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Description:</strong> {setup.description}
                </Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${setup.price}
                </Card.Text>
                <Card.Text>
                  <strong>Ratings:</strong> {setup.ratings} / 5
                </Card.Text>
                <Card.Text>
                  <strong>Stock:</strong> {setup.stock} items available
                </Card.Text>
                <Card.Text>
                  <strong>Components:</strong>
                  <ul>
                    {setup.components.map((component, index) => (
                      <li key={index}>
                        <strong>{component.name}</strong>:{" "}
                        {component.description}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <Button as={Link} to={`/setups/${setup._id}`} variant="primary">
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
