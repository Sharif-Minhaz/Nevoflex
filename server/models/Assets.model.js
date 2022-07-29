const { Schema, model } = require("mongoose");

const assetsSchema = new Schema({
	images: { type: Object },
	videos: { type: Object },
});

module.exports = model("asset", assetsSchema);
