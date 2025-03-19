import express from "express";
import mongoose from "mongoose";
import studentsRouter from "./routers/students";
import cors from "cors";

const db_password = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://abdallahkhaled9321:${db_password}@cluster0.brs9r.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connected :)");
  })
  .catch(() => {
    console.log("Failed!");
  });

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/students", studentsRouter);
