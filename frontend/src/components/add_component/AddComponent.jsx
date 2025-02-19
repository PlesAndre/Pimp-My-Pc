import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./add_component.css";

export default function AddComponent() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ratings, setRatings] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:3001/add-component", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          brand,
          description,
          price,
          image,
          ratings,
          stock,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Errore durante l'aggiunta del componente"
        );
      }

      setSuccess("Componente aggiunto con successo!");
      setName("");
      setBrand("");
      setDescription("");
      setPrice("");
      setImage("");
      setRatings("");
      setStock("");

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="text-light">Aggiungi Componente</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form className="text-light" onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nome del Componente</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome del componente"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="brand">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci la marca"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrizione del componente"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Prezzo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Prezzo del componente"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Immagine URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="URL dell'immagine"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="ratings">
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

        <Button variant="primary" type="submit">
          Aggiungi Componente
        </Button>
      </Form>
    </div>
  );
}
