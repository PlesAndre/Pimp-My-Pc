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
server.use(cors());
connectDB();

const port = 3001;

server.get("/", (req, res) => {
  res.send("Sei connesso alla mia backend");
});

// Chiamata delle queries tramite le funzioni dichiarate
server.use("/api/components", componentsRouter);
server.use("/api/setups", setupRouter);

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

server.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res
        .status(400)
        .json({ message: "Tutti i campi sono obbligatori" });
    }

    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .json({ message: "Utente già presente con questa email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id);

    return res
      .status(201)
      .json({ message: "Registrazione avvenuta con successo", token });
  } catch (error) {
    console.error(error);
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

    const token = generateToken(currentUser._id);

    return res
      .status(200)
      .json({ message: "Login effettuato con successo", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Errore interno del server" });
  }
});

server.listen(port, () => {
  console.log(`Server connesso alla porta ${port}`);
});
