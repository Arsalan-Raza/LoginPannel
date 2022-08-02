const express = require("express");
const passport = require("passport");
const router = require("./routers/router");
const cookieSession = require("cookie-session");
const { isLoggedIn } = require("./middleware/middleware");
const controller = require("./controller/controller");
require("./passport-setup");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cookieSession({
    name: "tuto-session",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/good", isLoggedIn, (req, res) => {
  controller.signup(req, res);
  res.send("sign up as a user");

  // {name:req.user.displayName,pic:req.user.photos[0].value,email:req.user.emails[0].value}
});
app.use("/", router);

module.exports = app;
