import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

router.get("/users", (req, res) => {
  const filePath = path.resolve("src/data/users.json");
  const data = fs.readFileSync(filePath, "utf-8");
  res.json(JSON.parse(data));
});

export default router;