let _option;

function set(option) {
	_option = option;
}

function get() {
	return _option;
}

module.exports = { set, get };
