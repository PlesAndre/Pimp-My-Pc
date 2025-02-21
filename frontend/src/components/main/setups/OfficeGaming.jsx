import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Immagini utilizzaye
import gaming from "../../../assets/img_setups/gaming_setup.jpeg";
import office from "../../../assets/img_setups/office_setup.jpeg";
import workstation from "../../../assets/img_setups/workstation.jpeg";
import "./office_gaming.css";

export default function OfficeGaming() {
  return (
    <Container className="container-setups-category mt-5">
      <Row className="mb-3 p-4 gap-2">
        <h2 className="text-center mt-3">PC DESKTOP PERSONALIZZATI</h2>
        <Col>
          <Card className="setup-card-category border-0">
            <Card.Img className="img-fluid" variant="top" src={office} />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center">CASA/UFFICIO</Card.Title>
              <div className="flex-grow-1">
                <ul>
                  <li>Affidabile e veloce per il lavoro quotidiano</li>
                  <li>Ideale per navigazione, email e documenti</li>
                  <li>Consumi ridotti ed elevata silenziosità</li>
                </ul>
              </div>
              <div className="d-flex justify-content-center">
                <Button as={Link} to="/setups" variant="primary">
                  SCOPRI I SETUP
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="setup-card-category border-0">
            <Card.Img className="img-fluid" variant="top" src={gaming} />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center">GAMING/STREAMING</Card.Title>
              <div className="flex-grow-1">
                <ul>
                  <li>Prestazioni elevate per gaming e streaming</li>
                  <li>Grafica fluida grazie a una potente GPU</li>
                  <li>Sistema di raffreddamento avanzato</li>
                </ul>
              </div>
              <div className="d-flex justify-content-center">
                <Button as={Link} to="/setups" variant="primary">
                  SCOPRI I SETUP
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="setup-card-category border-0">
            <Card.Img className="img-fluid" variant="top" src={workstation} />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center">WORKSTATION</Card.Title>
              <div className="flex-grow-1">
                <ul>
                  <li>Massima potenza per lavori professionali</li>
                  <li>Hardware avanzato per carichi di lavoro intensi</li>
                  <li>Alta affidabilità e performance costanti</li>
                </ul>
              </div>
              <div className="d-flex justify-content-center">
                <Button as={Link} to="/setups" variant="primary">
                  SCOPRI I SETUP
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
