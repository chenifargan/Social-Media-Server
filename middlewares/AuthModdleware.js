const { verify } = require("jsonwebtoken");

//check if user connectd if yes so create commend if not send error
const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) {
    return res.json({ error: "User not logged in!" });
  }
  try {
    const validToken = verify(accessToken, "importendsecret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
