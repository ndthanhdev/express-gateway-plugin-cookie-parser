const secret = require("./src/secret");

module.exports = {
  version: "1.3.0",
  init: function (pluginContext) {
    pluginContext.registerGatewayRoute(require("./src/middlewares/cookie-parser"));

    pluginContext.eventBus.on("hot-reload", function ({ newConfig }) {
      secret.set(newConfig.secret);
    });
  },
};
