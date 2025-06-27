"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zoltra_1 = require("zoltra");
// const logger = new Logger("Server");
const app = new zoltra_1.Zoltra();
// setup routes, middlewares, etc.
app.register((0, zoltra_1.corsPlugin)());
exports.default = app;
// export async function startServer() {
//   try {
//     const app = new Zoltra();
//     app.register(corsPlugin());
//     await app.start();
//   } catch (error) {
//     const err = error as Error;
//     logger.error(`Failed to start server: ${err.message}`);
//     process.exit(1);
//   }
// }
// startServer();
