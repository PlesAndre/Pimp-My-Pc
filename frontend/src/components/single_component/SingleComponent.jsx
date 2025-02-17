import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

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
    <Container className="mt-5">
      <Card>
        <Card.Img variant="top" src={component.image} alt={component.name} />
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
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
