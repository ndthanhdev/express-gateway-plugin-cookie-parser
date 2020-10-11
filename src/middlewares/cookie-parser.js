const cookieParser = require("cookie-parser");
const secret = require("../secret");

module.exports = function (gatewayExpressAppEg) {
  gatewayExpressAppEg.use(cookieParser(secret.get()));
};
