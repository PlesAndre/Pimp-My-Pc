import express from "express";
import cors from "cors";
import connectDB from "./config/config_db.js";
import User from "./models/newUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { router as componentsRouter } from "./routes/singleComponentsRoutes.js";
import { router as setupRouter } from "./routes/completeSetupRoutes.js";

const server = express();
server.use(express.json());
server.use(cors({ origin: "*" }));
connectDB();

const port = 3001;

server.get("/", (req, res) => {
  res.send("Sei connesso alla mia backend");
});

// Chiamata delle queries tramite le funzioni dichiarate
server.use("/api/components", componentsRouter);
server.use("/api/setups", setupRouter);

// Genera token per il JWT
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

server.post("/register", async (req, res) => {
  try {
    // Estrazione dei dati dalla richiesta
    const { firstname, lastname, email, password, role = "user" } = req.body;

    // Verifica che tutti i campi siano stati inviati
    if (!firstname || !lastname || !email || !password) {
      return res
        .status(400)
        .json({ message: "Tutti i campi sono obbligatori" });
    }

    // Verifica che l'utente non esista già
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .json({ message: "Utente già presente con questa email" });
    }

    // Se il ruolo non è 'user' o 'admin', rifiuta la richiesta
    if (role !== "user" && role !== "admin") {
      return res
        .status(400)
        .json({ message: "Ruolo non valido, deve essere 'user' o 'admin'" });
    }

    // Cripta la password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuovo utente con il ruolo specificato (o "user" se non specificato)
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role, // Aggiungi il ruolo (default: 'user')
    });

    // Genera un token JWT per il nuovo utente
    const token = generateToken(newUser._id, newUser.role);

    // Restituisci il token come risposta
    return res
      .status(201)
      .json({ message: "Registrazione avvenuta con successo", token });
  } catch (error) {
    console.error(error); // Log dell'errore per il debug
    return res.status(500).json({ message: "Errore interno del server" });
  }
});

server.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ message: "Campi obbligatori" });
    }

    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      return res.status(401).json({ message: "Credenziali non valide" });
    }

    const passwordMatch = await bcrypt.compare(password, currentUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Password errata" });
    }

    // Genera il token (presumibilmente una funzione che crea un JWT)
    const token = generateToken(currentUser._id);

    // Restituisce il token e il ruolo dell'utente (admin o user)
    return res.status(200).json({
      message: "Login effettuato con successo",
      token,
      role: currentUser.role, // Aggiungi il ruolo all'interno della risposta
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Errore interno del server" });
  }
});

server.listen(port, () => {
  console.log(`Server connesso alla porta ${port}`);
});
