const express = require("express");
const { updateOne: findOneAndUpdate } = require("../models/customermodel.js");
const router = express.Router();

const Customer = require("../models/customermodel.js");
const Transfer = require("../models/transfermodel.js");

router.route("/addCustomer").post((req, res) => {
  const addedCustomer = new Customer({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    currentBalance: req.body.currentBalance,
  });
  addedCustomer
    .save()
    .then(() => {
      res.sendStatus(250);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.route("/customers").get((req, res) => {
  Customer.find({}, function (err, result) {
    if (!err) {
      res.send(result);
    } else {
      throw err;
    }
  });
});

router.route("/allemail").get((req, res) => {
  Customer.find({}, "email , -_id", function (err, result) {
    if (!err) {
      res.send(result);
    } else {
      throw err;
    }
  });
});

router
  .route("/transfer")
  .post((req, res) => {
    const moneyTransfer = new Transfer({
      from_acc: req.body.from_acc,
      to_acc: req.body.to_acc,
      balance: req.body.balance,
      transfer_time: new Date(),
    });
    moneyTransfer
      .save()
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        res.json(error);
      });
  })
  .get((req, res) => {
    Transfer.find({}, function (err, result) {
      if (!err) {
        res.send(result);
      } else {
        throw err;
      }
    });
  });

router.route("/updateBalance").post((req, res) => {
  Customer.findOneAndUpdate(
    { "email": req.body.from_acc },
    {
      $inc :
      { "currentBalance": -req.body.balance },
    },
    function(err, docs){
      if (err) {
        console.log(err);
      } else {
        console.log("Deducted : ", docs);
      }
    }
  )
  Customer.findOneAndUpdate(
    { "email": req.body.to_acc },
    {
      $inc: { "currentBalance": req.body.balance },
    },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Added : ", docs);
      }
    }
  );
});

module.exports = router;
