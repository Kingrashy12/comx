import { corsPlugin } from "zoltra";
import app from "../server";
import routes from "./routes";

app.register(corsPlugin());
app.loadStaticRoutes(routes);

export default app.handler.bind(app);
