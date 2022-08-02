const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const whitelist = [
    'https://www.yoursite.com',
    'http://127.0.0.1:5500',
    'http://localhost:3000',
    'http://localhost:8080'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

const middlewares = [
	cors(corsOptions),
	cookieParser(),
	express.urlencoded({ extended: true }),
	express.json(),
];

module.exports = (app) => {
	app.use(middlewares);
};
