import React from "react";
import { Container, Carousel } from "react-bootstrap";
import OfficeGaming from "./setups/OfficeGaming";
import BestSetups from "./best_setups/BestSetups";

// Immagini utilizzate
import amd from "../../assets/img_carosello/amd.jpeg";
import intel from "../../assets/img_carosello/intel.jpeg";
import socials from "../../assets/img_carosello/socials.jpeg";
import "./main.css";

export default function Main() {
  return (
    <>
      <Container className="p-0">
        <Carousel className="custom-carousel">
          <Carousel.Item>
            <img
              src={amd}
              alt="amd setup"
              className="d-block w-100 carousel-img"
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
              className="d-block w-100 carousel-img"
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
              className="d-block w-100 carousel-img"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <OfficeGaming />
      <BestSetups />
    </>
  );
}
