
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  id:{
     type: Number,
     default: 0
     },
  fname: String,
  lname: String,
  email: {
    type:String,
    unique : true
  },
  currentBalance: Number,
});



const Customer = mongoose.model('customer', CustomerSchema)
module.exports = Customer;