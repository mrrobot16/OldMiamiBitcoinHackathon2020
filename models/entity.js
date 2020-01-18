const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entitySchema = Schema({
	name: String,
	private: Boolean,
	wallets: []
});

const Entity = mongoose.model('Entity', entitySchema);

module.exports = Entity;