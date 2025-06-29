import { corsPlugin, Zoltra } from "zoltra";
import routes from "./routes";
import { IncomingMessage, ServerResponse } from "http";

const app = new Zoltra();

app.register(corsPlugin());
app.loadStaticRoutes(routes);
console.log("Routes:", app._routes);
// export default app.handler.bind(app);

export default function handler(req: IncomingMessage, res: ServerResponse) {
  console.log("Handling request:", req.method, req.url);
  // strip /api
  if (req.url?.startsWith("/api")) {
    console.log("Stripping /api from URL");
    // Replace /api with an empty string, or default to "/"
    req.url = req.url.replace(/^\/api/, "") || "/";
  }
  //   await app.start();
  return app.handler(req, res);
}
