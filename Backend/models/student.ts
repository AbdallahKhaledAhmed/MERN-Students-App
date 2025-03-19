import mongoose, { Schema, Document } from "mongoose";

interface Istudent extends Document {
  name: string;
  age: number;
  email: string;
  class: string;
}

const studentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  class: { type: String, required: true },
});

export const studentModel = mongoose.model<Istudent>("students", studentSchema);
