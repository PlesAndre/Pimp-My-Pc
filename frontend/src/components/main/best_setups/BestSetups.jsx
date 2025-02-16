import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import gaming from "../../../assets/img_setups/gaming_setup.jpeg";
import "./style.css";

export default function BestSetups() {
  return (
    <Container className="container-best-setups">
      <Row>
        <h2 className="text-center mt-2">CONFIGURAZIONI MIGLIORI</h2>
        <div className="scroll-container mb-4">
          <Col xs={4}>
            <Card className="setup-wrapper w-100">
              <div className="setup-text">
                <p>Extreme Pc Setup</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={gaming}
                  alt="Extreme Setup"
                  className="setup-image"
                ></img>
              </div>

              <div className="price-container">
                <span className="price-text">prezzo</span>
                <span className="price-symbol">€</span>
              </div>

              <div className="products-points-holder mt-3 text-center">
                <ul className="list-disc pl-5 text-gray-700">
                  <li>CPU</li>
                  <li>GPU</li>
                  <li>RAM</li>
                  <li>MOBO</li>
                  <li>SSD</li>
                  <li>PSU</li>
                  {/* {components.map((spec, index) => (
                                <li key={index}>{spec}</li>
                             ))} */}
                </ul>
              </div>
            </Card>
          </Col>
          <Col xs={4} className="col-setup">
            <Card className="setup-wrapper w-100">
              <div className="setup-text">
                <p>Extreme Pc Setup</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={gaming}
                  alt="Extreme Setup"
                  className="setup-image"
                ></img>
              </div>

              <div className="price-container">
                <span className="price-text">prezzo</span>
                <span className="price-symbol">€</span>
              </div>

              <div className="products-points-holder mt-3 text-center">
                <ul className="list-disc pl-5 text-gray-700">
                  <li>CPU</li>
                  <li>GPU</li>
                  <li>RAM</li>
                  <li>MOBO</li>
                  <li>SSD</li>
                  <li>PSU</li>
                  {/* {components.map((spec, index) => (
                                <li key={index}>{spec}</li>
                             ))} */}
                </ul>
              </div>
            </Card>
          </Col>
          <Col xs={4} className="col-setup">
            <Card className="setup-wrapper w-100">
              <div className="setup-text">
                <p>Extreme Pc Setup</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={gaming}
                  alt="Extreme Setup"
                  className="setup-image"
                ></img>
              </div>

              <div className="price-container">
                <span className="price-text">prezzo</span>
                <span className="price-symbol">€</span>
              </div>

              <div className="products-points-holder mt-3 text-center">
                <ul className="list-disc pl-5 text-gray-700">
                  <li>CPU</li>
                  <li>GPU</li>
                  <li>RAM</li>
                  <li>MOBO</li>
                  <li>SSD</li>
                  <li>PSU</li>
                  {/* {components.map((spec, index) => (
                                <li key={index}>{spec}</li>
                             ))} */}
                </ul>
              </div>
            </Card>
          </Col>
          <Col xs={4} className="col-setup">
            <Card className="setup-wrapper w-100">
              <div className="setup-text">
                <p>Extreme Pc Setup</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={gaming}
                  alt="Extreme Setup"
                  className="setup-image"
                ></img>
              </div>

              <div className="price-container">
                <span className="price-text">prezzo</span>
                <span className="price-symbol">€</span>
              </div>

              <div className="products-points-holder mt-3 text-center">
                <ul className="list-disc pl-5 text-gray-700">
                  <li>CPU</li>
                  <li>GPU</li>
                  <li>RAM</li>
                  <li>MOBO</li>
                  <li>SSD</li>
                  <li>PSU</li>
                  {/* {components.map((spec, index) => (
                                <li key={index}>{spec}</li>
                             ))} */}
                </ul>
              </div>
            </Card>
          </Col>
          <Col xs={4} className="col-setup">
            <Card className="setup-wrapper w-100">
              <div className="setup-text">
                <p>Extreme Pc Setup</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={gaming}
                  alt="Extreme Setup"
                  className="setup-image"
                ></img>
              </div>

              <div className="price-container">
                <span className="price-text">prezzo</span>
                <span className="price-symbol">€</span>
              </div>

              <div className="products-points-holder mt-3 text-center">
                <ul className="list-disc pl-5 text-gray-700">
                  <li>CPU</li>
                  <li>GPU</li>
                  <li>RAM</li>
                  <li>MOBO</li>
                  <li>SSD</li>
                  <li>PSU</li>
                  {/* {components.map((spec, index) => (
                                <li key={index}>{spec}</li>
                             ))} */}
                </ul>
              </div>
            </Card>
          </Col>
          <Col xs={4} className="col-setup">
            <Card className="setup-wrapper w-100">
              <div className="setup-text">
                <p>Extreme Pc Setup</p>
              </div>

              <div className="img-wrapper">
                <img
                  src={gaming}
                  alt="Extreme Setup"
                  className="setup-image"
                ></img>
              </div>

              <div className="price-container">
                <span className="price-text">prezzo</span>
                <span className="price-symbol">€</span>
              </div>

              <div className="products-points-holder mt-3 text-center">
                <ul className="list-disc pl-5 text-gray-700">
                  <li>CPU</li>
                  <li>GPU</li>
                  <li>RAM</li>
                  <li>MOBO</li>
                  <li>SSD</li>
                  <li>PSU</li>
                  {/* {components.map((spec, index) => (
                                <li key={index}>{spec}</li>
                             ))} */}
                </ul>
              </div>
            </Card>
          </Col>
        </div>
      </Row>
    </Container>
  );
}
