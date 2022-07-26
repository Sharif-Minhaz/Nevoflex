const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	firstName: { type: String },
	lastName: { type: String },
	cardNumber: { type: String },
	expirationDate: { type: Date },
	securityCode: { type: String },
});

module.exports = model("user", userSchema);
