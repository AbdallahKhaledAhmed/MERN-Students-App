import express from "express";
import mongoose from "mongoose";
import db_password from "../password";
import { studentModel } from "../models/student";
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
const port = 3002;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

app.get("/students", (req, res) => {
  let students = studentModel
    .find()
    .then((students) => {
      res.send(students);
    })
    .catch(() => console.log("error"));
});
app.get("/students/:id", (req, res) => {
  let students = studentModel
    .find()
    .then((students) => {
      res.send(students);
    })
    .catch(() => console.log("error"));
});
