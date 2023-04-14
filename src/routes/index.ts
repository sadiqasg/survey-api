import { Application } from "express";
import { formRoutes } from "./form.route";

export const routes = (app: Application) => {
    formRoutes(app);
};
