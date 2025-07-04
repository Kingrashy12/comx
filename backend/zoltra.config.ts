import { zoltraConfig } from "zoltra";

export default zoltraConfig({
  PORT: 8000,
  LOG_LEVEL: "info",
  NODE_ENV: "development",
  error: {
    displayErrObj: false,
    showStack: false,
    includeErrorMessage: true,
  },
  plugins: ["./plugins/Error.ts"],
  disableHandlerError: false,
});
