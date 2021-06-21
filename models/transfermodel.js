const mongoose = require("mongoose");

const TransferSchema = new mongoose.Schema({
  from_acc: {
    type: String,
    required: true,
  },
  to_acc: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  transfer_time: {
    type: Date,
    required: true,
  },
});

const Transfer = mongoose.model("transfer", TransferSchema);
module.exports = Transfer;
