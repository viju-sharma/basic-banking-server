const express = require('express');
const router = express.Router();

const Customer = require('../models/customermodel.js');

router.route('/addCustomer').post((req, res) => {
    console.log(req)
    const addedCustomer = new Customer({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      currentBalance: req.body.currentBalance,
    });
    addedCustomer.save()
    .then(data =>{
        
        res.sendStatus(200);
    })
    .catch(error =>{
        res.json(error)
        
    })
})


router.route("/customers").get((req, res)=>{
    Customer.find({}, function (err, result) {
      if (!err) {
          res.send(result)
      } else {
        throw err;
      }
    });
})



router.route("/customer").get((req, res)=>{
  const email = req.params;
  console.log(email);
  // Customer.find({email : email}, function (err, result) {
  //   if (!err) {
  //     console.log(result);
  //   } else {
  //     throw err;
  //   }
  // });


})


module.exports = router