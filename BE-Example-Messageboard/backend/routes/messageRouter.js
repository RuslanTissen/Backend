import express from "express";

const data = [];
const messageRouter = express.Router();

messageRouter
  .get("/", (req, res) => res.json(data))
  .post("/", (req, res) => {
    // Assumption: request contains a body with a valid message object
    req.body.id = Date.now();
    data.push(req.body);
    res.sendStatus(201);
  })

  .put("/:id", (req, res) => res.sendStatus(501))
  .patch("/:id", (req, res) => res.sendStatus(501))
  .delete("/:id", (req, res) => res.sendStatus(501));

export default messageRouter;
