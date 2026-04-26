import express from "express";
import cors from "cors";
import requestLogger from "./middleware/requestLogger.js";
import messageRouter from "./routes/messageRouter.js";

// Initialize express app
const app = express();
app.use(cors());
app.use(express.json());
app.use(requestLogger);
// TODO: App password Checking

// Add endpoints
app.use("/messages", messageRouter);
app.use((req, res) => res.sendStatus(404));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.send({ error: err.message });
});

// Start listening
app.listen(4000, () => console.log("Up at http://localhost:4000"));
