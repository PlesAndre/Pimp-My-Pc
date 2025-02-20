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

  // Recupero il ruolo dell'utente dal localStorage
  const userRole = localStorage.getItem("role");

  return (
    <Container className="mt-5 components-wrapper">
      <h2 className="text-center mb-4 text-light">I NOSTRI COMPONENTI</h2>

      {/* Mostra il pulsante "Aggiungi Componente" solo per gli admin */}
      {userRole === "admin" && (
        <div className="mb-4 text-center">
          <Button
            as={Link}
            to="/component/new"
            variant="warning"
            className="mx-2"
          >
            Aggiungi Componente
          </Button>
        </div>
      )}

      <Row>
        {components.map((component) => (
          <Col md={6} key={component._id} className="mb-4 mt-5">
            <Card className="ecommerce-card">
              <Card.Img
                variant="top"
                src={component.image}
                alt={component.name}
                className="card-image-components"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center font-weight-bold">
                  {component.name}
                </Card.Title>
                <Card.Text className="text-center text-light w-25 price-container">
                  ${component.price}
                </Card.Text>
                <Card.Text className="text-center text-success mb-3">
                  <strong>Stocks:</strong> {component.stock} items available
                </Card.Text>
                <div className="d-flex justify-content-center mt-auto">
                  <Button
                    as={Link}
                    to={`/components/${component._id}`}
                    variant="primary"
                    className="w-100 ecommerce-button"
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
