import { app, sendContent, ErrorLogger } from "nexujs";
// import AuthRoutes from "./routes/auth";

// app.use("/auth", AuthRoutes);

app.get("/", (req, res) => {
  res.send(sendContent);
});

app.use(ErrorLogger);

export default app;
