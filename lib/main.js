'use strict';

var _steem = require('steem');

var _steem2 = _interopRequireDefault(_steem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_steem2.default.api.getAccounts(['garox'], function (err, result) {
	console.log(err, result);
});