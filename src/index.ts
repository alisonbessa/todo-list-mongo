import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});