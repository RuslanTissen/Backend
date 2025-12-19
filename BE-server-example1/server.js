import express from "express";

// This creates server object
const app = express();

app.listen(3000, () => {
  console.log("Listening to http://locolhost:3000");
});
