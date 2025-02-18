import React from "react";
import logo from "../../assets/logo.png";
import visa from "../../assets/img_pagamenti/visa.png";
import mastercard from "../../assets/img_pagamenti/mastercard.png";
import paypal from "../../assets/img_pagamenti/paypal.png";
import cv from "../../assets/cv/Plescan Andrei Leonard - CV.pdf";
import { Container, Col, Button } from "react-bootstrap";
import "./style.css";

export default function Footer() {
  return (
    <Container fluid>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 custom-footer">
        <Col className="text-center mb-4">
          <div className="mb-2">
            <img src={logo} style={{ width: "100px" }} alt="logo" />
          </div>
          <div className="container-payments mt-3">
            <img className="img-payment" src={visa} alt="Visa payment" />
            <img
              className="img-payment"
              src={mastercard}
              alt="Mastercard payment"
            />
            <img className="img-payment" src={paypal} alt="Paypal payment" />
          </div>
        </Col>

        <Col className="text-center mb-4">
          <h5>Founder</h5>
          <Button
            variant="primary"
            href={cv}
            target="_blank"
            size="lg"
          >
            Visualizza il mio CV
          </Button>
        </Col>

        <Col className="text-center mb-4">
          <h5>Links</h5>
          <ul className="nav flex-column">
            <li className="p-0">Termini e condizioni</li>
            <li className="p-0">Features</li>
            <li className="p-0">Informativa</li>
            <li className="p-0">Privacy</li>
            <li className="p-0">RAEE</li>
          </ul>
        </Col>

        <Col className="text-center mb-4">
          <h5>Support</h5>
          <ul className="nav flex-column">
            <li className="p-0">Contattaci</li>
            <li className="p-0">Garanzia</li>
            <li className="p-0">Modalità di reso</li>
            <li className="p-0">Domande frequenti</li>
            <li className="p-0">I nostri servizi</li>
          </ul>
        </Col>
      </footer>
    </Container>
  );
}
