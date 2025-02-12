import React from "react";
import amd from "../../assets/img_carosello/amd.jpeg";
import intel from "../../assets/img_carosello/intel.jpeg";
import socials from "../../assets/img_carosello/socials.jpeg";
import gaming from "../../assets/img_setups/gaming_setup.jpeg";
import office from "../../assets/img_setups/office_setup.jpeg";
import "./style.css";
import { Container, Carousel, Row, Col, Card, Button } from "react-bootstrap";

export default function Main() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              src={amd}
              alt="amd setup"
              className="d-block w-100"
              style={{ height: "700px" }}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>CONFIGURAZIONE AMD</h3>
              <p>Qui troverai le migliori configurazioni AMD</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={intel}
              alt="intel setup"
              className="d-block w-100"
              style={{ height: "700px" }}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>CONFIGURAZIONE INTEL</h3>
              <p>Qui troverai le migliori configurazioni INTEL</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={socials}
              alt="socials"
              className="d-block w-100"
              style={{ height: "700px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="container-setups">
        <Row>
          <h2 className="text-center mb-4 text-light">SETUPS</h2>
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={office} />
            <Card.Body>
              <Card.Title className="text-center">CASA/UFFICIO</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }}>
            <Card.Img variant="top" src={gaming} />
            <Card.Body>
              <Card.Title className="text-center">GAMING/STREAMING</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" >Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
