import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style.css";

export default function BestSetups() {
  const [setups, setSetups] = useState([]);

  // Funzione per ottenere i setup
  const fetchSetups = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/setups");
      const data = await response.json();
      setSetups(data); // Imposta i setup
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSetups(); // Chiamata API per ottenere i setup
  }, []);

  return (
    <Container className="container-best-setups">
      <Row>
        <h2 className="text-center mt-2">CONFIGURAZIONI MIGLIORI</h2>
        <div className="scroll-container mb-4">
          {/* Mostra solo le prime 6 configurazioni */}
          {setups.slice(0, 6).map((setup, index) => (
            <Col xs={4} key={index}>
              <Card className="setup-wrapper w-100">
                <div className="setup-text">
                  {/* Rendi sicuro che setup.name sia una stringa */}
                  <p>{setup.name}</p>
                </div>

                <div className="img-wrapper">
                  {/* Controlla che setup.image sia una stringa */}
                  <img
                    src={setup.image || "default-image.jpg"} // Usa un'immagine di default in caso di mancanza
                    alt={setup.name || "Default Setup"} // Usa un alt di default
                    className="setup-image"
                  />
                </div>

                <div className="price-container">
                  <span className="price-text">prezzo</span>
                  <span className="price-symbol">€</span>
                  {/* Controlla che setup.price sia un numero */}
                  <span className="price-value">{setup.price || "N/A"}</span>
                </div>

                <div className="products-points-holder mt-3 text-center">
                  <ul className="list-disc pl-5 text-gray-700">
                    {/* Verifica che components sia un array e non vuoto */}
                    {Array.isArray(setup.components) &&
                    setup.components.length > 0 ? (
                      setup.components.map((component, index) => (
                        <li key={index}>
                          <strong>{component.name}</strong>:{" "}
                          {component.description}
                        </li>
                      ))
                    ) : (
                      <li>No components available</li>
                    )}
                  </ul>
                </div>
              </Card>
            </Col>
          ))}
        </div>
      </Row>
    </Container>
  );
}
