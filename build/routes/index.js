"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_route_1 = require("./user.route");
const routes = (app) => {
    (0, user_route_1.userRoutes)(app);
};
exports.routes = routes;
