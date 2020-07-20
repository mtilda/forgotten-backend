const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");

router.get("/", (req, res) => res.send("This is root!"));

// find all transactions
router.get("/transaction", (req, res) => {
  Transaction.find({}, (err, transactions) => {
    if (err) console.log(err);
    else res.send(transactions);
  });
});

// find transaction by ID
router.get("/transaction/:id", (req, res) => {
  Transaction.findById(req.params.id, (err, transaction) => {
    if (err) console.log(err);
    else res.send(transaction);
  });
});

// find transaction by user ID, borrower or lender
router.get("/transaction/user/:id", (req, res) => {
  Transaction.find(
    { $or: [{ lenderID: req.params.id }, { borrowerID: req.params.id }] },
    (err, transaction) => {
      if (err) console.log(err);
      else res.send(transaction);
    }
  );
});

// update transaction by ID
router.put("/transaction/:id", (req, res) => {
  Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, transaction) => {
      if (err) console.log(err);
      else res.send(transaction);
    }
  );
});

// delete transaction by ID
router.delete("/transaction/:id", (req, res) => {
  Transaction.findByIdAndDelete(req.params.id, (err, transaction) => {
    if (err) console.log(err);
    else res.send(transaction);
  });
});

// create new transaction
router.post("/transaction", (req, res) => {
  Transaction.create(req.body, (err, transaction) => {
    if (err) console.log(err);
    else res.send(transaction);
  });
});

module.exports = router;
