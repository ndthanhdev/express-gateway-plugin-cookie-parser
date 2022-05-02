const cookieParser = require("cookie-parser");
const secret = require("../secret");
const options = require("../options");

module.exports = function (gatewayExpressAppEg) {
	gatewayExpressAppEg.use(cookieParser(secret.get(), options.get()));
};
