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
app.loadInit();

export default function handler(req: IncomingMessage, res: ServerResponse) {
  // strip /api
  // if (req.url?.startsWith("/api")) {
  //   // Replace /api with an empty string, or default to "/"
  //   req.url = req.url.replace(/^\/api/, "") || "/";
  // }
  // //   await app.start();
  // return app.handler(req, res);

  res.status(200).json({
    ok: true,
    url: req.url,
    method: req.method,
  });
}
