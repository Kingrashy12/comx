import { corsPlugin, Zoltra } from "zoltra";
import routes from "./routes";
import { IncomingMessage, ServerResponse } from "http";

const app = new Zoltra();

app.register(corsPlugin());
app.loadStaticRoutes(routes);
console.log("Routes:", app._routes);
// export default app.handler.bind(app);

export default function handler(req: IncomingMessage, res: ServerResponse) {
  // strip /api
  if (req.url?.startsWith("/api")) {
    req.url = req.url.replace(/^\/api/, "") || "/";
  }
  //   await app.start();
  return app.handler(req, res);
}
