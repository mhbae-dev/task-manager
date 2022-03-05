import express from "express";
import taskRouter from "./routes/tasks.js";
import db from "./db/connect.js";
import connectDB from "./db/connect.js";

const PORT = 5000;
const app = express();

connectDB();

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
