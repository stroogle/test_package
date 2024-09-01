"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("./index");
(0, globals_1.describe)("Test for add", () => {
    (0, globals_1.it)("Check this out!", () => {
        (0, globals_1.expect)((0, index_1.add)(5, 6)).toBe(11);
    });
});
