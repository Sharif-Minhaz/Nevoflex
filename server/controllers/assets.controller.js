const { json } = require("express");
const Assets = require("../models/Assets.model");

exports.getAssetsController = async (req, res, next) => {
	try {
		const assets = await Assets.findOne();
		res.json(assets);
	} catch (err) {
		next(err);
	}
};
