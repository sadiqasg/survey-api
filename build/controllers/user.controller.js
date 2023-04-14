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
exports.updateUser = exports.getSingleUser = exports.createUser = exports.getAllUsers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_model_1 = __importDefault(require("../models/user.model"));
dotenv_1.default.config();
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find({});
        res.status(200).json({ users });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, password, photoUrl, signatureUrl, role, stats } = req.body;
    try {
        if (fullName || email || password) {
            return res.status(400).json({
                error: "Full name, email and password are required fields.",
            });
        }
        // Check if the email already exists
        const existingUser = yield user_model_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already in use" });
        }
        // Create a new user
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
        const newUser = new user_model_1.default({
            fullName,
            email,
            password: hashedPassword,
            photoUrl,
            signatureUrl,
            role,
            stats,
        });
        // await newUser.save();
        const user = yield user_model_1.default.create(newUser);
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: newUser._id }, String(process.env.JWT_SECRET));
        res.status(201).json({ token, user });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});
exports.createUser = createUser;
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield user_model_1.default.findById(id);
        if (!user) {
            return res.status(404).json({
                error: "User not found.",
            });
        }
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.getSingleUser = getSingleUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updates = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        photoUrl: req.body.photoUrl,
        signatureUrl: req.body.signatureUrl,
        role: req.body.role,
        stats: req.body.stats,
    };
    try {
        const user = yield user_model_1.default.findByIdAndUpdate(id, updates, {
            new: true,
        });
        if (!user) {
            return res.status(404).json({
                error: "User not found.",
            });
        }
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.updateUser = updateUser;
