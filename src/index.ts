import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.json());

dotenv.config();
console.log(process.env.DB_USER);
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/tasks", taskRoutes);
