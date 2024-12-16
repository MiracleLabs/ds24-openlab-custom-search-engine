//packages
import express, { json, urlencoded, static as static_ } from "express";
import cookieParser from "cookie-parser";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";
import searchRouter from "./routes/searchEngine.route.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
//port setup - app start declaration
const port = process.env.PORT || 8000;

app.use(cors());
//CORS setup
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
//bodyparser
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static_(join(__dirname, "public")));
//routes
app.use("/api", searchRouter);

app.get("*", function (req, res) {
  res.sendFile("index.html", { root: (__dirname, "public") });
});

// Server creation
app.listen(port, () => {
  console.log("Server started on port: " + port);
});

export default app;
