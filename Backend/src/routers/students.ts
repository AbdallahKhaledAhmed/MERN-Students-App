import express from "express";
import { studentModel } from "../models/student";
import multer from "multer";
const router = express.Router();
//multer
const upload = multer({ dest: "uploads/" });

router.get("/", (_, res) => {
  studentModel
    .find()
    .then((students) => res.status(200).send(students))
    .catch((err) => res.status(400).send(`Failed ${err}`));
});
router.get("/:id", (req, res) => {
  studentModel
    .findById(req.params.id)
    .then((student) => res.status(200).send(student))
    .catch((err) => {
      res.status(400).send(`Failed ${err}`);
    });
});

router.post("/", upload.none(), (req, res) => {
  const data = req.body;
  studentModel
    .create(data)
    .then((student) => res.status(201).send(student))
    .catch((err) => {
      res.status(400).send(`Failed ${err}`);
    });
});

router.put("/:id", upload.none(), (req, res) => {
  const data = req.body;
  studentModel
    .findByIdAndUpdate(req.params.id, data, { new: true })
    .then((student) => res.status(202).send(student))
    .catch((err) => {
      res.status(404).send(`Failed ${err}`);
    });
});
router.delete("/", (req, res) => {
  const userID = req.body;
  studentModel
    .findByIdAndDelete(userID)
    .then(() => res.status(204))
    .catch((err) => {
      res.status(404).send(`Failed ${err}`);
    });
});

export default router;
