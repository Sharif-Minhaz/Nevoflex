const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const middlewares = [
	cors(),
	cookieParser(),
	express.urlencoded({ extended: true }),
	express.json(),
];

module.exports = (app) => {
	app.use(middlewares);
};
