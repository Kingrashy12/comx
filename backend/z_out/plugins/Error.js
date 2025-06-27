"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zoltra_1 = require("zoltra");
class ErrorPlugin extends zoltra_1.Plugin {
    constructor() {
        super("error", "1.0.0");
    }
    init(app) {
        app.on("error", (err, req, res, logger) => {
            logger.error(err.message, err);
            return res
                .status(500)
                .json({ error: err.name, message: err.message, success: false });
        });
    }
}
exports.default = ErrorPlugin;
