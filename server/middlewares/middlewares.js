const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const middlewares = [express.urlencoded({ extended: true }), express.json(), cors(), cookieParser()];

module.exports = (app) => {
	app.use(middlewares);
};
