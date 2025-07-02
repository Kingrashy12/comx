import { corsPlugin, Zoltra } from "zoltra";

const app = new Zoltra();

app.register(corsPlugin());

app.loadStaticRoutes([]);

app.loadInit();

export default app.exportHandler();
