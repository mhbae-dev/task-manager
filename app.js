import express from "express";
import taskRouter from "./routes/tasks.js";

const PORT = 5000;
const app = express();

//MIDDLEWARE
app.use(express.json());

//ROUTES
app.use("/api/v1/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
