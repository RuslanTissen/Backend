const luckyLoggerReq = (req, res, next) => {
  console.log(`Req: ${req.method} ${req.url} ${req.fruit}`);

  if (Math.random() > 0.7) {
    next(); // continue processing request
  } else {
    res.send("Bad luck");
  }
};

export default luckyLoggerReq;
