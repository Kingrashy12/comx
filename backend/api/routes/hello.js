"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const zoltra_1 = require("zoltra");
const hello_1 = require("../controllers/hello");
exports.routes = (0, zoltra_1.defineRoutes)([
    {
        method: "GET",
        path: "/",
        handler: hello_1.helloController,
    },
]);
