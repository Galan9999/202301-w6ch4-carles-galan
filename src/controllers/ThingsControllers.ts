import { type Request, type Response } from "express";
import { things } from "../data/data.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json(things);
};

export const getThing = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(201).json(things.find((thing) => thing.id === +id));
};

export const deleteThing = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(things.splice(+id - 1, 1));
};
