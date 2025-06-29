import app from "../server";
// @ts-ignore
import routes from "./routes";

export default app.handler.bind(app);
