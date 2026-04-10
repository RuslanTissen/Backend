import express, { json } from "express";

const pets = [];

// create a router
const petsRouter = express.Router();

// add middleware for app "pets" routes
petsRouter.use((req, res, next) => {
  console.log("Pets request" + req.method);
  next();
});

// define routes
petsRouter.get("/", (req, res) => {
  res.send(pets);
});

petsRouter.post("/", (req, res) => {
  const pet = req.body;
  pets.push(pet);
  res.send(pet);
});

// export the router
export default petsRouter;
