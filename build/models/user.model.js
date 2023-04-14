"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// const statsSchema = new mongoose.Schema({
//     totalRequisitions: {
//         type: Number,
//         default: 0,
//     },
//     totalAmount: {
//         type: Number,
//         default: 0,
//     },
//     pendingRetirement: {
//         amount: {
//             type: Number,
//             default: 0,
//         },
//         total: {
//             type: Number,
//             default: 0,
//         },
//     },
// });
const userSchema = new mongoose_1.default.Schema({
    firebaseID: {
        type: String,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    photoUrl: String,
    signatureUrl: String,
    role: {
        type: String,
        enum: ["user", "holder", "finance", "reviewer", "admin"],
        default: "user",
    },
    // stats: {
    //     type: [statsSchema],
    //     default: [],
    // },
}, { timestamps: true });
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
