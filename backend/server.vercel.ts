import { corsPlugin, Zoltra } from "zoltra";
import { withPrefix } from "zoltra";
import { routes as authRoutes } from "./routes/auth";
import { routes as otpRoutes } from "./routes/otp";

const routes = [
  ...withPrefix("auth", authRoutes),
  ...withPrefix("otp", otpRoutes),
];

const app = new Zoltra();

app.register(corsPlugin());
app.loadStaticRoutes(routes);
app.loadInit();

export default app.exportHandler();
