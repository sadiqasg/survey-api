"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const form_route_1 = require("./form.route");
const routes = (app) => {
    (0, form_route_1.formRoutes)(app);
};
exports.routes = routes;
