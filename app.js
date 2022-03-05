import express from "express";
import taskRouter from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import notFound from "./middleware/not-found.js"

const PORT = 5000;
const app = express();

connectDB();

//MIDDLEWARE
app.use(express.json());
app.use(express.static("./public"));


//ROUTES
app.use("/api/v1/tasks", taskRouter);
app.use(notFound)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
