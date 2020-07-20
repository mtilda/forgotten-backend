const express = require("express");
const router = express.Router();
const User = require("../models/user");

// find all users
router.get("/user", (req, res) => {
  User.find({}, (err, users) => {
    if (err) console.log(err);
    else res.send(users);
  });
});

// find user by ID
router.get("/user/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) console.log(err);
    else res.send(user);
  });
});

// find user by handle
router.get("/user/handle/:handle", (req, res) => {
  User.find({ handle: req.params.handle }, (err, user) => {
    if (err) console.log(err);
    else res.send(user);
  });
});

// update user by ID
router.put("/user/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, user) => {
      if (err) console.log(err);
      else res.send(user);
    }
  );
});

// delete user by ID
router.delete("/user/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) console.log(err);
    else res.send(user);
  });
});

// create new user
router.post("/user", (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) console.log(err);
    else res.send(user);
  });
});

module.exports = router;
