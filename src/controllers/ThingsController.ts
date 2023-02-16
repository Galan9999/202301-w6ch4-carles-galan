import { type Request, type Response } from "express";
import { app, port } from "..";

export const getThings = app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ "hello world": "hola" });
});
app.listen(port);
