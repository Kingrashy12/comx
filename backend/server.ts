import { Logger, Zoltra, corsPlugin } from "zoltra";

const logger = new Logger("Server");

const app = new Zoltra();

export default app;

async function startServer() {
  try {
    const app = new Zoltra();

    app.register(corsPlugin());

    await app.start();
  } catch (error) {
    const err = error as Error;
    logger.error(`Failed to start server: ${err.message}`);
    process.exit(1);
  }
}

startServer();
