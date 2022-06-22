import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";

const app = express();

dotenv.config();
const port = process.env.PORT || 5002;

mongoose.connect(process.env.DB_URI);
const conn = mongoose.connection;

conn.on("error", (e) => {
  console.error(e.stack);
});

conn.once("open", () => {
  console.log("Connected to Database");
});

app.use("./user", userRouter);
app.use(express.json());

app.listen(port, () => {
  console.log(`server started, listening on port ${port}`);
});
