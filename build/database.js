"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
mongoose.set("debug", true); // this logs mongo query to terminal
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DEV_MONGO_URI = String(process.env.DEV_MONGO_URI);
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose
        .connect(DEV_MONGO_URI, connectionParams)
        .then(() => {
        console.log("Connected to Gwapp MongooseDB!");
    })
        .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    });
});
exports.default = main;
