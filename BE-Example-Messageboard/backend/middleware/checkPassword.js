function checkPassword(req, res, next) {
  const password = req.get("Authorisation");

  if (password !== "cucaracha") {
    res.status(401);
    res.send({ error: "Invalid password" });
    return;
  }
  next();
}

export default checkPassword;
