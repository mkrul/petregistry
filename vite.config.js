"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var vite_plugin_ruby_1 = __importDefault(require("vite-plugin-ruby"));
var vite_plugin_full_reload_1 = __importDefault(require("vite-plugin-full-reload"));
var vite_plugin_stimulus_hmr_1 = __importDefault(require("vite-plugin-stimulus-hmr"));
exports.default = (0, vite_1.defineConfig)({
    clearScreen: false,
    plugins: [
        (0, vite_plugin_ruby_1.default)(),
        (0, vite_plugin_full_reload_1.default)(["config/routes.rb", "app/views/**/*"], { delay: 200 }),
        (0, vite_plugin_stimulus_hmr_1.default)()
    ],
    root: "./app/assets",
    build: {
        manifest: true,
        rollupOptions: {
            input: "/app/javascript/entrypoints/application.js"
        }
    }
});
