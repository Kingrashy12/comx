"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zoltra_1 = require("zoltra");
exports.default = (0, zoltra_1.zoltraConfig)({
  PORT: 8000,
  LOG_LEVEL: "info",
  NODE_ENV: "development",
  error: {
    displayErrObj: false,
    showStack: false,
    includeErrorMessage: true,
  },
  plugins: ["./plugins/Error.ts"],
  disableHandlerError: false,
});
