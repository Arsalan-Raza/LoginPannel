const express = require("express");
const passport = require("passport");
const controller = require("../controller/controller");

require("../passport-setup");

const router = express.Router();

router.route("/").get(controller.home);

//for google signup
router.route("/signup/google").get(
  passport.authenticate(
    "google",
    { scope: ["profile", "email"] },
    (req, res) => {
      res.send("signup");
    }
  )
);

//fro google login
router.route("/login/google").get(
  passport.authenticate(
    "google",
    { scope: ["profile", "email"] },
    (req, res) => {
      res.send("login");
    }
  )
);

//callback
router
  .route("/google/callback")
  .get(
    passport.authenticate("google", { failureRedirect: "/failed" }),
    function (req, res) {
      res.redirect("/good");
    }
  );

//succes login
router.route("/success").get(controller.success);
//failed
router.route("/failure").get(controller.failure);
//logout
router.route("/logout").get(controller.logout);
//create
router.route("/signup").post(controller.signup);
//existing
router.route("/login").post(controller.login);

router.route("/update/:id").post(controller.update);

module.exports = router;
