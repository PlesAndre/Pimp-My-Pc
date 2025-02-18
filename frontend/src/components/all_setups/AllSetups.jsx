import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container, Spinner } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

export default function AllSetups() {
  const [setups, setSetups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  const fetchSetups = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/setups");
      const data = await response.json();

      if (response.ok) {
        const filteredSetups = category
          ? data.filter((setup) => setup.category === category)
          : data;

        setSetups(filteredSetups);
      } else {
        setError("Errore nel recupero dei setups");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSetups();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]); //

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" variant="primary" />
        <p>Caricamento in corso...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5 text-center text-light">
        <p>Errore: {error}</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-light">I NOSTRI SETUPS</h2>
      <Row>
        {setups.length === 0 ? (
          <Col className="text-center text-light">
            <p>Nessun setup trovato per questa categoria.</p>
          </Col>
        ) : (
          setups.map((setup) => (
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
          ))
        )}
      </Row>
    </Container>
  );
}
