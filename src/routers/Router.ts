import { Router } from "express";
import {
  deleteThing,
  getThing,
  getThings,
} from "../controllers/ThingsControllers.js";

export const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:id", getThing);
thingsRouter.delete("/things/:id", deleteThing);
