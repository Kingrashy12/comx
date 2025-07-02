import { corsPlugin, Zoltra, ZoltraRequest, ZoltraResponse } from "zoltra";
import { withPrefix } from "zoltra";
import { routes as authRoutes } from "./routes/auth";
import { routes as otpRoutes } from "./routes/otp";

const routes = [
  ...withPrefix("user", authRoutes),
  ...withPrefix("otp", otpRoutes),
];

const app = new Zoltra();

app.register(corsPlugin());
app.loadStaticRoutes(routes);
app.loadInit();

export default function handler(req: ZoltraRequest, res: ZoltraResponse) {
  //   return app.exportHandler()(req, res);
  res.json({ url: req.url });
}
