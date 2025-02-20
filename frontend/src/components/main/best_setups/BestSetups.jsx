import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./best_setups.css";

export default function BestSetups() {
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
    <Container className="container-best-setups mt-5">
      <Row>
        <h2 className="text-center mt-2">CONFIGURAZIONI MIGLIORI</h2>
        <div className="scroll-container mb-4">
          {setups.slice(0, 4).map((setup, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Card className="setup-wrapper d-flex flex-column">
                <div className="setup-text">
                  <p>{setup.name}</p>
                </div>

                <div>
                  <img
                    src={setup.image}
                    alt={setup.name}
                    className="setups-image-card"
                  />
                </div>

                <div className="best-price-container">
                  <span className="price-text">{setup.price}</span>
                  <span className="price-symbol">€</span>
                </div>

                <div className="products-points-holder mt-3 text-center">
                  <ul className="setup-components">
                    {setup.components.map((component, index) => (
                      <li key={index}>
                        <strong>{component.name}</strong>
                        {component.description}
                      </li>
                    ))}
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
