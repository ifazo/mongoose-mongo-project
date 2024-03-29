"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = require("./views/authRoutes");
const userRoutes_1 = require("./views/userRoutes");
const productRoutes_1 = require("./views/productRoutes");
const categoryRoutes_1 = require("./views/categoryRoutes");
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use("/api/auth", authRoutes_1.authRoutes);
exports.app.use("/api/users", userRoutes_1.userRoutes);
exports.app.use("/api/categories", categoryRoutes_1.categoryRoutes);
exports.app.use("/api/products", productRoutes_1.productRoutes);
exports.app.get("/", (req, res) => {
    res.send("Hello world from express mongoose server!");
});
exports.app.get("/api", (req, res) => {
    res.send("Server api is running successfully!");
});
