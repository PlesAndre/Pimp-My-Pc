import React, { useState, useEffect, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { CartContext } from "../../context/context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState(null);
  const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  // Funzione per ottenere l'utente dai dati salvati nel localStorage
  const getUserFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const email = localStorage.getItem("email");

    if (token && role && email) {
      return { email, role };
    } else {
      return null;
    }
  };

  // Recuperiamo l'utente dal localStorage al caricamento della pagina
  useEffect(() => {
    const loggedUser = getUserFromLocalStorage();
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []); // Effettua il fetch solo una volta al caricamento della pagina

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Errore nel login");
      }

      // Salviamo il token, il ruolo e l'email nel localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("email", loginEmail);

      setSuccess("Login effettuato con successo!");
      setLoginEmail("");
      setLoginPassword("");
      setShowLogin(false);

      // Aggiorniamo lo stato dell'utente
      setUser({ email: loginEmail, role: data.role });

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    // Rimuoviamo i dati dell'utente dal localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");

    setUser(null);
    navigate("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Errore durante la registrazione");
      }

      setSuccess("Registrazione avvenuta con successo! Ora puoi accedere.");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setRole("user"); // Reset del ruolo
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container className="p-0">
          <Navbar.Brand className="p-0">
            <img className="logo-brand" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-around w-100">
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/setups">
                SETUPS
              </Nav.Link>
              <Nav.Link as={Link} to="/components">
                COMPONENTI
              </Nav.Link>
              {!user ? (
                <>
                  <Nav.Link onClick={() => setShowRegister(true)}>
                    REGISTRATI
                  </Nav.Link>
                  <Nav.Link onClick={() => setShowLogin(true)}>ACCEDI</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="#">{user.email}</Nav.Link>
                  <Nav.Link onClick={handleLogout}>ESCI</Nav.Link>
                </>
              )}
              <Nav.Link className="cart-icon" onClick={() => setShowCart(true)}>
                <i className="bi bi-basket-fill"></i>
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal per la registrazione */}
      <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registrati</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleRegister}>
            <Form.Group controlId="registerFirstname">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="registerLastname">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo cognome"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="registerEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="registerPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci la password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="registerRole">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control
                as="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Control>
            </Form.Group>

            <Button
              variant="primary"
              className="mt-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Registrazione in corso..." : "Registrati"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal per il login */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Accedi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleLogin}>
            <Form.Group controlId="loginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci la password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="success"
              className="mt-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Accesso in corso..." : "Accedi"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modale carrello */}
      <Modal show={showCart} onHide={() => setShowCart(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Carrello</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Il carrello è vuoto!</p>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">${item.price}</span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(index)}
                  >
                    ✕
                  </Button>
                </div>
              ))}
              {/* Mostra il totale */}
              <div className="cart-total">
                <strong>Totale: ${getTotalPrice()}</strong>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCart(false)}>
            Chiudi
          </Button>
          <Button
            variant="primary"
            onClick={() => alert("Procedi al pagamento")}
          >
            Procedi al pagamento
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
