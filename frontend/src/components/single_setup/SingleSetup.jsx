import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

export default function SingleSetup() {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const [setup, setSetup] = useState(null);

  const fetchSetupDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/setups/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setSetup(data);
    } catch (error) {
      console.error("Error fetching setup:", error);
    }
  };

  useEffect(() => {
    fetchSetupDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Ricarica i dettagli quando l'ID cambia

  if (!setup) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img variant="top" src={setup.image} alt={setup.name} />
        <Card.Body>
          <Card.Title>{setup.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {setup.category}
          </Card.Subtitle>
          <div>
            {" "}
            {/* Usa div invece di Card.Text */}
            <strong>Description:</strong> {setup.description}
          </div>
          <div>
            <strong>Price:</strong> ${setup.price}
          </div>
          <div>
            <strong>Ratings:</strong> {setup.ratings} / 5
          </div>
          <div>
            <strong>Stock:</strong> {setup.stock} items available
          </div>
          <div>
            <strong>Components:</strong>
            <ul>
              {setup.components.map((component, index) => (
                <li key={index}>
                  <strong>{component.name}</strong>: {component.description}
                </li>
              ))}
            </ul>
          </div>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
