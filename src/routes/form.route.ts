import { Application } from "express";
import { getAllFormData, postForm } from "../controllers/form.controller";

export const formRoutes = (app: Application) => {
  app.post("/api/form", postForm);
  app.get('/api/form', getAllFormData);
};
