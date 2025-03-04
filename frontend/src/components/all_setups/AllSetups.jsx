import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./setups.css";
import "dotenv/config";


export default function AllSetups() {
  const [setups, setSetups] = useState([]);
  const userRole = localStorage.getItem("role"); // Recupera il ruolo dell'utente dal localStorage

  // GET che restituisce tutti i setups dalla collezione "complete_setups"
  const fetchSetups = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/api/setups`);
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
    <Container className="mt-5 w-75">
      <h2 className="text-center mb-4 text-light">I NOSTRI SETUPS</h2>

      {/* Aggiungi il pulsante "Aggiungi Setup" solo per l'admin */}
      {userRole === "admin" && (
        <div className="d-flex justify-content-center mb-5">
          <Button as={Link} to="/setup/new" variant="warning" className="mx-2">
            Aggiungi Setup
          </Button>
        </div>
      )}

      <Row>
        {setups.map((setup) => (
          <Col md={6} key={setup._id} className="mb-4">
            <Card className="border-0 rounded-3 h-100">
              <Card.Img
                src={setup.image}
                alt={setup.name}
                className="card-image-setups rounded-3"
              />
              <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="text-center font-weight-bold text-dark mb-3">
                  {setup.name}
                </Card.Title>
                <Card.Text className="text-center text-light mb-3 price-container-card w-25">
                  ${setup.price}
                </Card.Text>
                <div className="mt-4">
                  <ul className="list-unstyled ps-3">
                    {setup.components.map((component, index) => (
                      <li key={index} className="text-muted">
                        <strong>{component.name}</strong>:{" "}
                        {component.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="d-flex justify-content-center mt-auto">
                  <Button
                    as={Link}
                    to={`/setups/${setup._id}`}
                    variant="primary"
                    className="w-50"
                  >
                    DETTAGLI
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
