const jwt = require("jsonwebtoken");

function restrict() {
  const authError = { message: "Credentials Invalid" };
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json(authError);
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          res.status(401).json(authError);
        }

        req.token = decoded;
        console.log(decoded);
        next();
      });
    } catch (err) {
      res.status(403).json({ message: "You're not authorized" });
    }
  };
}

module.exports = restrict;
