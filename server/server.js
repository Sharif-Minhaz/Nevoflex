const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const setMiddlewares = require("./middlewares/middlewares");

//set middlewares
setMiddlewares(app);

const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
	res.status(404).json("Page not found");
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json("Internal server error");
});

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.info(`Server running at http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
