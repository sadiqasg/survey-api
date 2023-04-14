"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (app) => {
    app.get("/users", user_controller_1.getAllUsers);
    app.post("/users", user_controller_1.createUser);
    app.get("/users/:id", user_controller_1.getSingleUser);
    app.put("/users/:id", user_controller_1.updateUser);
};
exports.userRoutes = userRoutes;
