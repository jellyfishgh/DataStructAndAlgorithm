'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PokerCard = require('./PokerCard');

var _PokerCard2 = _interopRequireDefault(_PokerCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PokerPlay = function () {
    function PokerPlay(str) {
        _classCallCheck(this, PokerPlay);

        this.cards = this.init(str);
    }

    _createClass(PokerPlay, [{
        key: 'init',
        value: function init(str) {
            var cards = [];
            var arr = str.split(' ');
            arr.map(function (item) {
                cards.push(new _PokerCard2.default(item.substring(0, 1), item.substring(1)));
            });
            return cards;
        }
    }, {
        key: 'sortCardsByTypeValue',
        value: function sortCardsByTypeValue() {
            this.cards.sort(function (a, b) {
                return a.lessTypeValue(b);
            });
            // for(let i = 0; i < this.cards.length - 1; i++) {
            //     for(let j = i + 1; j < this.cards.length; j++) {
            //         if(this.cards[i].lessTypeValue(this.cards[j])) {
            //             let temp = this.cards[i]
            //             this.cards[i] = this.cards[j]
            //             this.cards[j] = temp
            //         }
            //     }
            // }
        }
    }, {
        key: 'sortCardsByValueType',
        value: function sortCardsByValueType() {
            this.cards.sort(function (a, b) {
                return a.lessValueType(b);
            });
        }
    }, {
        key: 'traverse',
        value: function traverse() {
            this.cards.map(function (card) {
                console.log(card.toString());
            });
            console.log('-----');
        }
    }, {
        key: 'cpValue',
        value: function cpValue(i, j) {
            return this.cards[i].compareValue(this.cards[j]);
        }
    }, {
        key: 'cpType',
        value: function cpType(i, j) {
            return this.cards[i].compareType(this.cards[j]);
        }
    }, {
        key: 'cpSameValue',
        value: function cpSameValue(i, j) {
            return this.cpValue(i, j) === 0;
        }
    }, {
        key: 'cpSameType',
        value: function cpSameType(i, j) {
            return this.cpType(i, j) === 0;
        }
    }, {
        key: 'result',
        value: function result() {
            var result = 0;
            this.sortCardsByTypeValue();
            if (this.cpSameType(0, 4)) {
                // 同花
                this.sortCardsByValueType();
                if (this.cpValue(0, 4) === 4) {
                    if (this.cards[0].value === 'A') {
                        // 同花大顺
                        result = 1;
                    } else {
                        // 同花顺
                        result = 2;
                    }
                } else {
                    // 同花
                    result = 5;
                }
            } else {
                // 非同花顺
                this.sortCardsByValueType();
                if (this.cpSameValue(0, 3) || this.cpSameValue(1, 4)) {
                    // 4 张
                    result = 3;
                } else {
                    if (this.cpSameValue(0, 2)) {
                        if (this.cpSameValue(3, 4)) {
                            // 葫芦
                            result = 4;
                        } else {
                            // 3张
                            result = 7;
                        }
                    } else if (this.cpSameValue(1, 3)) {
                        result = 7;
                    } else if (this.cpSameValue(2, 4)) {
                        if (this.cpSameValue(0, 1)) {
                            result = 4;
                        } else {
                            result = 7;
                        }
                    } else {
                        if (this.cpSameValue(0, 1)) {
                            if (this.cpSameValue(2, 3)) {
                                // 两对
                                result = 8;
                            } else {
                                if (this.cpSameValue(3, 4)) {
                                    result = 8;
                                } else {
                                    // 一对
                                    result = 9;
                                }
                            }
                        } else {
                            if (this.cpSameValue(1, 2)) {
                                if (this.cpSameValue(3, 4)) {
                                    result = 8;
                                } else {
                                    result = 9;
                                }
                            } else {
                                if (this.cpSameValue(2, 3)) {
                                    result = 9;
                                } else {
                                    if (this.cpSameValue(3, 4)) {
                                        result = 9;
                                    } else {
                                        if (this.cpValue(0, 4) === 4) {
                                            // 顺子
                                            result = 6;
                                        } else {
                                            result = 10;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return result;
        }
    }]);

    return PokerPlay;
}();

exports.default = PokerPlay;