module.exports = function (req, res, next) {
  res.header("Access-Control-Expose-Headers", "X-Total-Count");
  next();
};