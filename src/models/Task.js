import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: String,
  },
  {
    versionKey: false,
  }
);

export default model("Task", taskSchema);
