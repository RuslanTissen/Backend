const addFruit = (req, res, next) => {
  console.log("<Request Coming In!>");
  req.fruit = "delicious!";
  next(); // continue processing request
  console.log("А я выполнюсь в самом конце!");
};

export default addFruit;
