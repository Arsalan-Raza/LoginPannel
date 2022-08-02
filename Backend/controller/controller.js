const bcrypt = require("bcrypt");
const User = require("../model/database");
const jwt = require("jsonwebtoken");

//home
exports.home = async (req, res) => {
  res.send("HELLO FROM HOME PAGE");
};

//successfuly signed in
exports.success = async (req, res) => {
  try {
    jwt.verify(req.header.token, "secretkey");
  } catch (e) {
    if (e) {
      res.json({
        message: "Success page",
        // name:req.user.displayName,
        // email:req.user.emails[0].value,
        // pic:req.user.photo[0].value
      });
    } else {
      res.send("TOKEN must be provided");
    }
  }
};

exports.failure = async (req, res) => {
  res.send("Something went wrong");
};

//logout
exports.logout = async (req, res) => {
  await res.clearCookie("token");
  req.session = null;
  req.logout();
  res.redirect("/");
};

//signing up first time
exports.signup = async (req, res) => {
  const body = req.user;
  if (!body) {
    const body = req.body;
    password = await bcrypt.hash(body.password, 10);
    body.password = password;
    User.create(body);
    res.json({
      success: `created as ${body.role}`,
    });
  } else {
    const guser = new User({
      name: req.user.displayName,
      email: req.user.emails[0].value,
      role: "user",
    });

    User.create(guser);
  }
};

//login
exports.login = async (req, res) => {
  const body = req.body;
  if (!body) {
    const email = req.user.emails[0].value;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.sendStatus(400).json({
        message: "USER NOT FOUND",
      });
    } else {
      const token = jwt.sign({ user }, "secretkey", { expiresIn: "2d" });

      res.cookie("token", token, {
        httpOnly: true,
      });

      res.send("You Have Limited Access");
    }
  } else {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      res.sendStatus(400).json({
        message: "USER NOT FOUND",
      });
    }
    const pass = await bcrypt.compare(body.password, user.password);
    if (pass) {
      //assigning token......
      const token = jwt.sign({ user }, "secretkey", { expiresIn: "2d" });

      res.cookie("token", token, {
        httpOnly: true,
      });
      //.......
      if (user.role == "admin") {
        res.send("You Have Access");
      } else {
        res.send("You Have Limited Access");
      }
    } else {
      res.sendStatus(400).json({
        message: "Incorrect Password",
      });
    }
  }
};

//update user
exports.update = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send({
    message: "updated",
  });
};
