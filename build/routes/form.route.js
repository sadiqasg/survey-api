"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formRoutes = void 0;
const form_controller_1 = require("../controllers/form.controller");
const formRoutes = (app) => {
    app.post("/api/form", form_controller_1.postForm);
    app.get('/api/form', form_controller_1.getAllFormData);
};
exports.formRoutes = formRoutes;
