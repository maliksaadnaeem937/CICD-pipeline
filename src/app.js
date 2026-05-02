import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CI/CD Node API is running 🚀");
});

app.use("/api", userRoutes);

export default app;