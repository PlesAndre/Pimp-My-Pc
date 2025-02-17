import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import "./style.css";

export default function SingleComponent() {
  const { id } = useParams();
  const [component, setComponent] = useState(null);

  const fetchComponentDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/components/${id}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setComponent(data);
    } catch (error) {
      console.error("Error fetching component:", error);
    }
  };

  useEffect(() => {
    fetchComponentDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Ricarica i dettagli quando l'ID cambia

  if (!component) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5 container-component">
      <Card className="product-card shadow-sm">
        <Card.Img
          variant="top"
          src={component.image}
          alt={component.name}
          className="card-img-top"
        />
        <Card.Body>
          <Card.Title className="product-title">{component.name}</Card.Title>
          <Card.Text className="product-description">
            {component.description}
          </Card.Text>
          <Card.Text className="text-primary">
            <strong>Prezzo:</strong> ${component.price}
          </Card.Text>
          <Card.Text className="text-warning">
            <strong>Valutazione:</strong> {component.ratings} / 5
          </Card.Text>
          <Card.Text className="text-success mb-4">
            <strong>Stocks:</strong> {component.stock} items available
          </Card.Text>
          <Button variant="primary" className="btn-ecommerce">
            AGGIUNGI AL CARRELLO
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
