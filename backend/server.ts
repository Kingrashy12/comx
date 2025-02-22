import { app, sendContent, ErrorLogger } from "nexujs";

app.get("/", (req, res) => {
  res.send(sendContent);
});

app.use(ErrorLogger);

export default app;
