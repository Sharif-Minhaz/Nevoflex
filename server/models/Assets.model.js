const { Schema, model } = require("mongoose");

const assetsSchema = new Schema({
	images: [{ type: String }],
	videos: [{ type: String }],
});

module.exports = model("asset", assetsSchema);
