import { corsPlugin, Zoltra } from "zoltra";
import routes from "./routes";

const app = new Zoltra();

app.register(corsPlugin());
app.loadStaticRoutes(routes);

export default app.handler.bind(app);
