import mongoose, { Schema, Document } from "mongoose";
import { isNotEmpty, isBoolean } from "class-validator";

export interface ITask extends Document {
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  { timestamps: true }
);

TaskSchema.pre<ITask>("save", function (next) {
  const errors = [];

  if (!isNotEmpty(this.title)) {
    errors.push("Title is required");
  }

  if (!isNotEmpty(this.description)) {
    errors.push("Description is required");
  }

  if (!isBoolean(this.isCompleted)) {
    errors.push("isCompleted must be a boolean");
  }

  if (errors.length > 0) {
    return next(new Error(JSON.stringify(errors)));
  } else {
    return next();
  }
});

export default mongoose.model<ITask>("Task", TaskSchema);
