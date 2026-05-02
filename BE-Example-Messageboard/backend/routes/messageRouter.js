import express from "express";

const data = [];
const messageRouter = express.Router();

messageRouter
  .get("/", (req, res) => res.json(data))
  .post("/", (req, res) => {
    // Assumption: request contains a body with a valid message object
    req.body.id = Date.now();
    data.push(req.body);
    res.status(201);
    res.send({ sucess: true, message: req.body });
  })

  .put("/:id", (req, res) => res.status(501).send({ error: "Not implemented" }))
  .patch("/:id", (req, res) =>
    res.status(501).send({ error: "Not implemented" }),
  )
  .delete("/:id", (req, res) =>
    res.status(501).send({ error: "Not implemented" }),
  );

export default messageRouter;
