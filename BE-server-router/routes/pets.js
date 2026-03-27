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

// export the router
export default petsRouter;
