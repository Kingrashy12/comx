import { corsPlugin, Zoltra } from "zoltra";
import { withPrefix } from "zoltra";
import { routes as authRoutes } from "../routes/auth";
import { routes as otpRoutes } from "../routes/otp";
import { IncomingMessage, ServerResponse } from "http";

const routes = [
  ...withPrefix("user", authRoutes),
  ...withPrefix("otp", otpRoutes),
];

const app = new Zoltra();

app.register(corsPlugin());
app.loadStaticRoutes(routes);
console.log("Routes:", app._routes);

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
