let _secret;

function set(secret) {
  _secret = secret;
}

function get() {
  return _secret;
}

module.exports = { set, get };
