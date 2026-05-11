import express from "express";

const data = [];
const router = express.Router();

router.get("/", (req, res) => {
  res.send(data).post().delete();
});
