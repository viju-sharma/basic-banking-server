const mongoose = require("mongoose");

const TransferSchema = new mongoose.Schema({
    acc_from : {
        type : String,
    },
    to_acc : {
        type : String
    },
    money : {
        type : Number
    },
    transfer_time : {
        type : Date
    }
});

const Transfer = mongoose.model("transfer", TransferSchema);
module.exports = Transfer;
