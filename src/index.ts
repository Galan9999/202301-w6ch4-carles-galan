import "./loadEnviroments.js";
import express from "express";
import morgan from "morgan";
import { thingsRouter } from "./routers/Router.js";

const port = process.env.PORT ?? 4000;
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", thingsRouter);

app.listen(port);
