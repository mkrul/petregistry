"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stimulus_1 = require("@hotwired/stimulus");
var stimulus_vite_helpers_1 = require("stimulus-vite-helpers");
var application = stimulus_1.Application.start();
var controllers = import.meta.glob('./**/*_controller.js');
(0, stimulus_vite_helpers_1.registerControllers)(application, controllers);
