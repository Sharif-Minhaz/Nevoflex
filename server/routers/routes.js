const assetsRoute = require("./assets.route");
const authRoute = require("./auth.route");

const routes = [
	{
		path: "/assets",
		handler: assetsRoute,
	},
	{
		path: "/auth",
		handler: authRoute,
	},
];

module.exports = (app) => {
	routes.forEach((route) => {
		app.use(route.path, route.handler);
	});
};
