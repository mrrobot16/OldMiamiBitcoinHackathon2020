const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = Schema({
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;