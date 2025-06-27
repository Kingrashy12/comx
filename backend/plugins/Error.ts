import { AppInterface, Plugin } from "zoltra";

class ErrorPlugin extends Plugin {
  constructor() {
    super("error", "1.0.0");
  }

  init(app: AppInterface): void {
    app.on("error", (err, req, res, logger) => {
      logger.error(err.message, err);

      return res
        .status(500)
        .json({ error: err.name, message: err.message, success: false });
    });
  }
}

export default ErrorPlugin;
