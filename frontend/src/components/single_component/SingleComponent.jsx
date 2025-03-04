import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { CartContext } from "../../context/context";
import "./single_component.css";


export default function SingleComponent() {
  const { id } = useParams();
  const [component, setComponent] = useState(null);
  const { addToCart } = useContext(CartContext); // Usa il context

  // GET che prende solamente il prodotto specifico tramite "id"
  useEffect(() => {
    const fetchComponentDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/components/${id}`
        );
        if (!response.ok) throw new Error(`Errore: ${response.status}`);
        const data = await response.json();
        setComponent(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComponentDetails();
  }, [id]);

  if (!component) return <div>Loading...</div>;

  return (
    <Container className="h-100 mt-5 container-component">
      <Card>
        <Card.Img
          variant="top"
          src={component.image}
          alt={component.name}
          className="card-img-top"
        />
        <Card.Body>
          <Card.Title>{component.name}</Card.Title>
          <Card.Text>{component.description}</Card.Text>
          <Card.Text className="text-primary">
            <strong>Prezzo:</strong> ${component.price}
          </Card.Text>

          <div className="d-flex justify-content-center mt-3">
            <Button
              variant="primary"
              className="btn-ecommerce"
              onClick={() =>
                addToCart(component.image, component.name, component.price)
              }
            >
              AGGIUNGI AL CARRELLO
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
