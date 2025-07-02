import { corsPlugin, Zoltra } from "zoltra";

const app = new Zoltra();

app.register(corsPlugin());

app.loadStaticRoutes([
  {
    path: "/",
    method: "GET",
    handler: (req, res) => {
      res.json({
        ok: true,
        message: "Welcome to Zoltra Serverless Home!",
      });
    },
  },
]);

app.loadInit();

export default app.exportHandler();
