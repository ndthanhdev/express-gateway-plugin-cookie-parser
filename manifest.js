const secret = require("./src/secret");
const options = require("./src/options");

module.exports = {
	version: "1.3.0",
	init: function (pluginContext) {
		pluginContext.registerGatewayRoute(
			require("./src/middlewares/cookie-parser")
		);

		pluginContext.eventBus.on("hot-reload", function ({ newConfig }) {
			secret.set(newConfig.secret);
			options.set(newConfig.options);
		});
	},
	schema: {
		secret: {
			type: "string",
		},
		option: {
			type: "object",
		},
	},
};
