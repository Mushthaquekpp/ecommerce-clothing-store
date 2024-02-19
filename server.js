import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bodyparser from "body-parser";
// import colors from "colors";
import dotenv from "dotenv";
import mongodb from "./db.js";
import route from "./Routes/AuthRoute.js";
const app = express();
dotenv.config();
app.use(express.json);
mongodb();
app.get("/ ", (req, res) => {
  console.log("api hit");
  res.send("hello");
});
app.use("/api", route);
app.listen(process.env.PORT, () => {
  console.log(`port running on ${process.env.PORT}`);
});
