'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PokerCard = function () {
    function PokerCard(type, value) {
        _classCallCheck(this, PokerCard);

        this.type = type;
        this.value = value;
        this.TYPES = {
            'S': 3,
            'H': 2,
            'D': 1,
            'C': 0
        };
        this.VALUES = {
            '2': 0,
            '3': 1,
            '4': 2,
            '5': 3,
            '6': 4,
            '7': 5,
            '8': 6,
            '9': 7,
            '10': 8,
            'J': 9,
            'Q': 10,
            'K': 11,
            'A': 12
        };
        this.DESC = ['同花大顺', '同花顺', '四条', '葫芦', '同花', '顺子', '三条', '两对', '一对', '高牌'];
    }

    _createClass(PokerCard, [{
        key: 'toString',
        value: function toString() {
            return this.type + '-->' + this.value;
        }
    }, {
        key: 'lessTypeValue',
        value: function lessTypeValue(card) {
            var ct = this.compareType(card);
            var cv = this.compareValue(card);
            if (ct < 0 || ct === 0 && cv < 0) return 1;else if (ct > 0) return -1;else if (ct === 0 && cv === 0) return 0;
        }
    }, {
        key: 'lessValueType',
        value: function lessValueType(card) {
            var cv = this.compareValue(card);
            var ct = this.compareType(card);
            if (cv < 0 || cv === 0 && ct < 0) return 1;else if (cv > 0) return -1;else if (ct === 0 && cv === 0) return 0;
        }
    }, {
        key: 'compareType',
        value: function compareType(card) {
            return this.TYPES[this.type] - this.TYPES[card.type];
        }
    }, {
        key: 'compareValue',
        value: function compareValue(card) {
            return this.VALUES[this.value] - this.VALUES[card.value];
        }
    }]);

    return PokerCard;
}();

exports.default = PokerCard;