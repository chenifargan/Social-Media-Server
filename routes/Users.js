const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthModdleware");

//register
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  await Users.create({ username: username, password: hash });
  const user = await Users.findOne({ where: { username: username } });
  console.log(user.id);
  const accesToken = sign(
    { username: username, id: user.id },
    "importendsecret"
  );
  res.json({ token: accesToken, username: username, id: user.id });

  //res.json("SUCCESS");
});
//login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //check if exist user:
  const user = await Users.findOne({ where: { username: username } });
  if (!user) {
    res.json({ error: "User Doesn't Exisit" });
  } else {
    //compare the passwords that get from the user and the password in the table
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Worng user name and password" });
      }
      const accesToken = sign(
        { username: user.username, id: user.id },
        "importendsecret"
      );
      res.json({ token: accesToken, username: username, id: user.id });
    });
  }
});
router.get("/auth", validateToken, (req, res) => {
  console.log(req.user);
  console.log();
  res.json(req.user);
});

router.get("/info/:id", async (req, res) => {
  const id = req.params.id;
  const basicInfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  res.json(basicInfo);
});
router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await Users.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then((match) => {
    if (!match) {
      res.json({ error: "Worng password entered" });
    } else {
      bcrypt.hash(newPassword, 10).then((hash) => {
        Users.update(
          { password: hash },

          { where: { username: req.user.username } }
        );
        res.json("Success");
      });
    }
  });
});

module.exports = router;
