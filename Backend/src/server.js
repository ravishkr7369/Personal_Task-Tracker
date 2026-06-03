import app from "./app.js";
import {connectDB} from "./config/connectDB.js";

const PORT = process.env.PORT;

await connectDB();

app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});