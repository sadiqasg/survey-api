"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(0, dotenv_1.config)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
(0, routes_1.routes)(app);
app.get("/", (req, res) => {
    res.status(200).send("Survey API\nNavigate to /api");
});
app.get("*", (req, res) => {
    res.status(404).send("This route does not exist");
});
app.listen(port, () => {
    console.log(`Survey API is listening on port ${port}`);
});
exports.default = app;
