import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AddSetup() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ratings, setRatings] = useState("");
  const [stock, setStock] = useState("");

  // State che prende i valori dei "components"
  const [components, setComponents] = useState([
    { name: "", description: "" },
    { name: "", description: "" },
    { name: "", description: "" },
    { name: "", description: "" },
    { name: "", description: "" },
    { name: "", description: "" },
    { name: "", description: "" },
  ]);

  const navigate = useNavigate();

  // Gestisce il cambiamento di nome e descrizione per ogni componente
  const handleComponentChange = (index, field, value) => {
    const updatedComponents = [...components];
    updatedComponents[index][field] = value;
    setComponents(updatedComponents);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/setups/new", {
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

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      setName("");
      setDescription("");
      setCategory("");
      setPrice("");
      setImage("");
      setRatings("");
      setStock("");
      setComponents(Array(7).fill({ name: "", description: "" })); // Crea un array length di 7 e riempie ogni elemento con name e description

      navigate("/setups");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h2 className="text-center text-light my-5">AGGIUNGI SETUP</h2>
      <Form
        style={{ margin: "0 auto" }}
        className="text-light w-50"
        onSubmit={handleSubmit}
      >
        {/* Nome e descrizione del setup */}
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nome del Setup</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome del setup"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descrizione del Setup</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrizione del setup"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Prezzo</Form.Label>
          <Form.Control
            type="number"
            placeholder="Prezzo"
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
            type="number"
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

        {/* Nome e descrizione dei componenti */}
        <h4 className="text-center mt-5">COMPONENTI</h4>
        {components.map((component, index) => (
          <div key={index}>
            <Form.Group className="mb-1" controlId={`component-name-${index}`}>
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder={`(CPU,GPU,...)`}
                value={component.name}
                onChange={(e) =>
                  handleComponentChange(index, "name", e.target.value)
                }
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId={`component-description-${index}`}
            >
              <Form.Control
                type="text"
                placeholder={`Descrizione ${index + 1}`}
                value={component.description}
                onChange={(e) =>
                  handleComponentChange(index, "description", e.target.value)
                }
                required
              />
            </Form.Group>
          </div>
        ))}

        <div className="d-flex justify-content-center">
          <Button className="mt-3" variant="primary" type="submit">
            Aggiungi Setup
          </Button>
        </div>
      </Form>
    </Container>
  );
}
