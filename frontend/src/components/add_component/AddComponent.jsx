import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AddComponent() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ratings, setRatings] = useState("");
  const [stock, setStock] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newComponent = {
        name: e.target.name.value,
        brand: e.target.brand.value,
        description: e.target.description.value,
        price: e.target.price.value,
        image: e.target.image.value,
        ratings: e.target.ratings.value,
        stock: e.target.stock.value,
      };

      const response = await fetch("http://localhost:3001/api/components/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComponent),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Errore durante l'aggiunta del componente"
        );
      }

      setName("");
      setBrand("");
      setDescription("");
      setPrice("");
      setImage("");
      setRatings("");
      setStock("");

      navigate("/components");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h2 className="text-light text-center my-5">AGGIUNGI COMPONENTE</h2>

      <Form
        className="text-light w-50"
        style={{ margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nome del Componente</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome del componente"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci la marca"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrizione del componente"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Prezzo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Prezzo del componente"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Immagine URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL dell'immagine"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ratings">
          <Form.Label>Valutazioni</Form.Label>
          <Form.Control
            type="text"
            placeholder="Valutazione del componente (es. 4.5)"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantità in stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button className="mt-3" variant="primary" type="submit">
            Aggiungi Componente
          </Button>
        </div>
      </Form>
    </Container>
  );
}
