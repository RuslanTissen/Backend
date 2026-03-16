import express from "express";
import addFruit from "./middleware/addFruit.js";

function saveUserToDatabase() {
  throw new Error("Saving user to database failed very badly misarably :((((");
}

const app = express();
app.use(addFruit);

app.get(
  "/users",
  (req, res, next) => {
    console.log(" /users loading");
    next();
  },
  (req, res) => {
    res.send("Users here hallo");
  },
);

app.post("/users", (req, res) => {
  saveUserToDatabase();
  res.send("Done!");
});

app.use((req, res) => {
  res.send({ error: "Resource not found!!!" });
});

app.use((err, req, res, next) => {
  console.log("ERROR during request processing", err);
  res.send({ message: err.message });
});

app.listen(3030, () => {
  console.log("Listen up at http://localhost:3030");
});
