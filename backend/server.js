import express from "express";
import cors from "cors";
import connectDB from "./config/config_db.js";
import { getAllComponents } from "./queries/singleComponent.js";
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

server.use("/api/components", componentsRouter);
server.use("/api/setups", setupRouter);

server.listen(port, () => {
  console.log(`Server connesso alla porta ${port}`);
});
