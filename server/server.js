import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyparser from "body-parser";
import colors from "colors";
import dotenv from "dotenv";
import mongodb from "./db.js";
import route from "./Routes/AuthRoute.js";
dotenv.config();
mongodb();
const app = express();
app.use(express.json);
app.use("/api", route);
app.listen(process.env.PORT, () => {
  console.log(`port running on ${process.env.PORT}`.bgCyan.green);
});
