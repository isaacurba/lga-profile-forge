import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectedDB from "../config/db.js";
import authRouter from "../src/routes/authRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    // origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
  })
);
// API EndPoints
app.get("/", (req, res) => {
  res.send("Api Working");
})
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
  connectedDB().then(() => {
    console.log(`App listening on port http://localhost:${PORT}!`);
  });
});