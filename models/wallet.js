const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = Schema({
	address: String,
	balance: Number,
	transactions: [{}]
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;