'use strict';

var _PokerPlay = require('./PokerPlay');

var _PokerPlay2 = _interopRequireDefault(_PokerPlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str = process.argv.slice(2)[0];

var play = new _PokerPlay2.default(str);

// play.traverse()

// play.sortCardsByTypeValue()

// play.sortCardsByValueType()
//
// play.traverse()

console.log(play.result());