import express from "express";
import "./loadEnviroments.js";

const port = process.env.PORT ?? 4000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ "hello world": "hola" });
});
app.listen(port);
