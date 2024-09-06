"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client");
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
// Render your React component instead
var root = (0, client_1.createRoot)(document.getElementById("app"));
root.render(react_1.default.createElement("h1", null, "Hello, world"));
