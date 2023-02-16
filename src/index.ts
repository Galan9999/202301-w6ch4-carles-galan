import express from "express";
import "./loadEnviroments.js";
import morgan from "morgan";

export const port = process.env.PORT ?? 4000;

export const app = express();
app.use(morgan("dev"));
