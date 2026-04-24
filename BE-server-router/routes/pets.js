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
  pet.id = pets.length + 1;
  pets.push(pet);

  res.status(201);
  res.send(pet);
});
petsRouter.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const pet = pets.find((x) => x.id === id);
  const index = pets.indexOf(pet);

  pets.splice(index, 1);

  res.send(200);
});

// export the router
export default petsRouter;
