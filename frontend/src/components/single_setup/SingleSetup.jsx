import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { CartContext } from "../../context/context";
import "./single_setup.css";

export default function SingleSetup() {
  const { id } = useParams();
  const [setup, setSetup] = useState(null);
  const { addToCart } = useContext(CartContext); // Usa il context

  // GET che prende solamente il prodotto specifico tramite "id"
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
    <Container className="mt-5 container-setup">
      <Card>
        <Card.Img
          variant="top"
          src={setup.image}
          alt={setup.name}
          className="card-img-top-setup"
        />
        <Card.Body>
          <Card.Title>{setup.name}</Card.Title>
          <Card.Text className=" mb-3">{setup.description}</Card.Text>
          <Card.Text className="text-primary mb-3">
            <strong>Prezzo:</strong> €{setup.price}
          </Card.Text>
          <Card.Text className="text-warning mb-3">
            <strong>Valutazione:</strong> {setup.ratings} / 5
          </Card.Text>
          <Card.Text className="text-success mb-3">
            <strong>Stocks:</strong> {setup.stock} pezzi disponibili
          </Card.Text>
          <div className="product-components mb-3">
            <strong>Scheda Tecnica:</strong>
            <ul className="mt-1">
              {setup.components.map((component, index) => (
                <li key={index}>
                  <strong>{component.name}</strong>: {component.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button
              variant="primary"
              className="btn-ecommerce"
              onClick={() => addToCart(setup.image, setup.name, setup.price)}
            >
              AGGIUNGI AL CARRELLO
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
