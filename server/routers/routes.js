const assetsRoute = require("./assets.route");

const routes = [
	{
		path: "/assets",
		handler: assetsRoute,
	},
];

module.exports = (app) => {
	routes.forEach((route) => {
		app.use(route.path, route.handler);
	});
};
