import { Route } from "zoltra";
import { routes as authRoutes } from "../routes/auth";
import { routes as otpRoutes } from "../routes/otp";

function prefix(base: string, routes: Route[]) {
  return routes.map((route) => ({
    ...route,
    path: `/${base}${route.path.startsWith("/") ? "" : "/"}${
      route.path
    }`.replace(/\/+/g, "/"),
  }));
}

export default [...prefix("user", authRoutes), ...prefix("otp", otpRoutes)];
