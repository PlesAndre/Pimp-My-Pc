import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./add_Setup.css";

export default function AddSetup() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ratings, setRatings] = useState("");
  const [stock, setStock] = useState("");
  const [components, setComponents] = useState(
    Array(7).fill({ name: "", description: "" })
  );
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // Gestisce il cambiamento di nome e descrizione per ogni componente
  const handleComponentChange = (index, field, value) => {
    const updatedComponents = [...components];
    updatedComponents[index][field] = value;
    setComponents(updatedComponents);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:3001/add-setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          category,
          price,
          image,
          ratings,
          stock,
          components,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Errore durante l'aggiunta del setup");
      }

      setSuccess("Setup aggiunto con successo!");
      setName("");
      setDescription("");
      setCategory("");
      setPrice("");
      setImage("");
      setRatings("");
      setStock("");
      setComponents(Array(7).fill({ name: "", description: "" }));

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2 className="text-light">Aggiungi Setup</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form className="text-light" onSubmit={handleSubmit}>
        {/* Nome e descrizione del setup */}
        <Form.Group controlId="name">
          <Form.Label>Nome del Setup</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome del setup"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Descrizione del Setup</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrizione del setup"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Prezzo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Prezzo"
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
            placeholder="Valutazioni (es. 4.5)"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </Form.Group>

        {/* 7 Componenti */}
        <h4>Componenti (max 7)</h4>
        {components.map((component, index) => (
          <div key={index}>
            <Form.Group controlId={`component-name-${index}`}>
              <Form.Label>Nome del Componente</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Nome del componente`}
                value={component.name}
                onChange={(e) =>
                  handleComponentChange(index, "name", e.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group controlId={`component-description-${index}`}>
              <Form.Label>Descrizione del Componente {index + 1}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Descrizione del componente ${index + 1}`}
                value={component.description}
                onChange={(e) =>
                  handleComponentChange(index, "description", e.target.value)
                }
                required
              />
            </Form.Group>
          </div>
        ))}

        <Button variant="primary" type="submit">
          Aggiungi Setup
        </Button>
      </Form>
    </div>
  );
}
