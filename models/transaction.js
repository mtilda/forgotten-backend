const mongoose = require('../db/connection');

const transactionSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        icon: { type: String, required: true },
        value: { type: Number, default: 0},
        transactionDate: { type: Date, default: Date.now },
        returnDate: { type: Date, required: true },
        lenderID: String,
        lenderName: String,
        borrowerID: String,
        borrowerName: String,
        creator: { type: String, required: true }
    },
    { timestamps: true}
)

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction